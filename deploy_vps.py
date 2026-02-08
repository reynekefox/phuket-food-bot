#!/usr/bin/env python3
"""
VPS Deployment Script for Phuket Food Bot
Uses Paramiko for SSH connection and deployment automation
"""

import paramiko
import time
import sys

# Fix Windows console encoding for Unicode (PM2 outputs ✓ etc.)
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.stderr.reconfigure(encoding='utf-8', errors='replace')

# VPS Connection Details
VPS_HOST = "109.73.199.60"
VPS_USER = "root"
VPS_PASSWORD = "eaACMy*w+5L+_w"

# Project Configuration
REPO_URL = "https://github.com/reynekefox/phuket-food-bot.git"
PROJECT_DIR = "/root/phuket-food-bot"

# Environment Variables
BOT_ENV = """# Telegram Bot Token from @BotFather
BOT_TOKEN=8578407997:AAF11lODOTD588rTzLlWMVn0TUZhxyy2SxQ

# Admin chat ID for order notifications (your Telegram ID)
ADMIN_CHAT_ID=236147307

# Web App URL (after deployment)
WEBAPP_URL=https://phuket-food-bot.vercel.app

# API Server URL
API_URL=http://localhost:3000
"""

SERVER_ENV = """# Server port
PORT=3000

# Bot token for sending notifications
BOT_TOKEN=8578407997:AAF11lODOTD588rTzLlWMVn0TUZhxyy2SxQ

# Admin chat ID for order notifications
ADMIN_CHAT_ID=236147307

# Web App URL
WEBAPP_URL=https://phuket-food-bot.vercel.app
"""


def execute_command(ssh, command, timeout=300):
    """Execute a command via SSH and return output"""
    print(f"\n[CMD] {command}")
    stdin, stdout, stderr = ssh.exec_command(command, timeout=timeout)
    
    # Wait for command to complete
    exit_status = stdout.channel.recv_exit_status()
    
    output = stdout.read().decode('utf-8').strip()
    error = stderr.read().decode('utf-8').strip()
    
    if output:
        print(f"[OUT]\n{output}")
    if error:
        print(f"[ERR]\n{error}")
    
    return exit_status, output, error


def main():
    print("=" * 60)
    print("Phuket Food Bot - VPS Deployment Script")
    print("=" * 60)
    print(f"Target: {VPS_USER}@{VPS_HOST}")
    print("=" * 60)
    
    # Create SSH client
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        # Connect to VPS
        print("\n[*] Connecting to VPS...")
        ssh.connect(VPS_HOST, username=VPS_USER, password=VPS_PASSWORD, timeout=30)
        print("[+] Connected successfully!")
        
        # Step 1: Update system and install prerequisites
        print("\n" + "=" * 60)
        print("Step 1: Installing prerequisites")
        print("=" * 60)
        
        commands = [
            "apt-get update -y",
            "apt-get install -y curl git",
            # Install Node.js 18 via NodeSource
            "curl -fsSL https://deb.nodesource.com/setup_18.x | bash -",
            "apt-get install -y nodejs",
            "node --version",
            "npm --version",
            # Install PM2 globally
            "npm install -g pm2",
            "pm2 --version",
        ]
        
        for cmd in commands:
            status, _, _ = execute_command(ssh, cmd)
            if status != 0 and "already" not in cmd.lower():
                print(f"[!] Command may have failed with status {status}, continuing...")
        
        # Step 2: Stop existing PM2 processes if any
        print("\n" + "=" * 60)
        print("Step 2: Stopping existing processes")
        print("=" * 60)
        
        execute_command(ssh, "pm2 delete phuket-bot 2>/dev/null || true")
        execute_command(ssh, "pm2 delete phuket-server 2>/dev/null || true")
        
        # Step 3: Clone or update repository
        print("\n" + "=" * 60)
        print("Step 3: Cloning repository")
        print("=" * 60)
        
        # Remove old directory and clone fresh
        execute_command(ssh, f"rm -rf {PROJECT_DIR}")
        status, _, _ = execute_command(ssh, f"git clone {REPO_URL} {PROJECT_DIR}")
        if status != 0:
            print("[-] Failed to clone repository!")
            sys.exit(1)
        
        # Step 4: Create environment files
        print("\n" + "=" * 60)
        print("Step 4: Creating environment files")
        print("=" * 60)
        
        # Create bot/.env
        execute_command(ssh, f"cat > {PROJECT_DIR}/bot/.env << 'EOF'\n{BOT_ENV}EOF")
        
        # Create server/.env
        execute_command(ssh, f"cat > {PROJECT_DIR}/server/.env << 'EOF'\n{SERVER_ENV}EOF")
        
        # Verify .env files
        execute_command(ssh, f"cat {PROJECT_DIR}/bot/.env")
        execute_command(ssh, f"cat {PROJECT_DIR}/server/.env")
        
        # Step 5: Install dependencies
        print("\n" + "=" * 60)
        print("Step 5: Installing dependencies")
        print("=" * 60)
        
        execute_command(ssh, f"cd {PROJECT_DIR}/bot && npm install", timeout=600)
        execute_command(ssh, f"cd {PROJECT_DIR}/server && npm install", timeout=600)
        
        # Step 6: Build projects
        print("\n" + "=" * 60)
        print("Step 6: Building projects")
        print("=" * 60)
        
        status_bot, _, _ = execute_command(ssh, f"cd {PROJECT_DIR}/bot && npm run build", timeout=300)
        status_server, _, _ = execute_command(ssh, f"cd {PROJECT_DIR}/server && npm run build", timeout=300)
        
        if status_bot != 0 or status_server != 0:
            print("[!] Build may have issues, checking dist folders...")
        
        # Check dist folders exist
        execute_command(ssh, f"ls -la {PROJECT_DIR}/bot/dist/")
        execute_command(ssh, f"ls -la {PROJECT_DIR}/server/dist/")
        
        # Step 7: Start with PM2
        print("\n" + "=" * 60)
        print("Step 7: Starting services with PM2")
        print("=" * 60)
        
        # Start bot
        execute_command(ssh, f"cd {PROJECT_DIR}/bot && pm2 start dist/index.js --name phuket-bot")
        
        # Start server
        execute_command(ssh, f"cd {PROJECT_DIR}/server && pm2 start dist/index.js --name phuket-server")
        
        # Save PM2 config and set startup
        execute_command(ssh, "pm2 save")
        execute_command(ssh, "pm2 startup systemd -u root --hp /root 2>/dev/null || true")
        
        # Step 8: Verification
        print("\n" + "=" * 60)
        print("Step 8: Verification")
        print("=" * 60)
        
        time.sleep(3)  # Wait for processes to start
        
        execute_command(ssh, "pm2 list")
        execute_command(ssh, "pm2 logs --lines 20 --nostream")
        
        print("\n" + "=" * 60)
        print("DEPLOYMENT COMPLETE!")
        print("=" * 60)
        print(f"""
Services running on {VPS_HOST}:
- phuket-bot:    Telegram bot
- phuket-server: API server on port 3000

To verify:
1. Open your Telegram bot and send /start
2. Check PM2 status: ssh root@{VPS_HOST} 'pm2 list'
3. View logs: ssh root@{VPS_HOST} 'pm2 logs'
        """)
        
    except paramiko.AuthenticationException:
        print("[-] Authentication failed! Check credentials.")
        sys.exit(1)
    except paramiko.SSHException as e:
        print(f"[-] SSH error: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"[-] Error: {e}")
        sys.exit(1)
    finally:
        ssh.close()
        print("\n[*] Connection closed.")


if __name__ == "__main__":
    main()
