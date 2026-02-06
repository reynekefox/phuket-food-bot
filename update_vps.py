#!/usr/bin/env python3
"""
Quick Update Script for Phuket Food Bot on VPS
Pulls latest code from GitHub and restarts services
"""

import paramiko
import time
import sys

# VPS Connection Details
VPS_HOST = "109.73.199.60"
VPS_USER = "root"
VPS_PASSWORD = "eaACMy*w+5L+_w"

PROJECT_DIR = "/root/phuket-food-bot"


def execute_command(ssh, command, timeout=120):
    """Execute a command via SSH and return output"""
    print(f"\n[CMD] {command}")
    stdin, stdout, stderr = ssh.exec_command(command, timeout=timeout)
    
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
    print("Phuket Food Bot - Quick Update Script")
    print("=" * 60)
    print(f"Target: {VPS_USER}@{VPS_HOST}")
    print("=" * 60)
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        print("\n[*] Connecting to VPS...")
        ssh.connect(VPS_HOST, username=VPS_USER, password=VPS_PASSWORD, timeout=30)
        print("[+] Connected successfully!")
        
        # Step 1: Pull latest code
        print("\n" + "=" * 60)
        print("Step 1: Pulling latest code from GitHub")
        print("=" * 60)
        
        status, _, _ = execute_command(ssh, f"cd {PROJECT_DIR} && git pull")
        if status != 0:
            print("[-] Git pull failed!")
            sys.exit(1)
        
        # Step 2: Rebuild bot
        print("\n" + "=" * 60)
        print("Step 2: Rebuilding bot")
        print("=" * 60)
        
        execute_command(ssh, f"cd {PROJECT_DIR}/bot && npm run build", timeout=120)
        
        # Step 3: Restart PM2 processes
        print("\n" + "=" * 60)
        print("Step 3: Restarting services")
        print("=" * 60)
        
        execute_command(ssh, "pm2 restart phuket-bot")
        execute_command(ssh, "pm2 restart phuket-server")
        
        # Step 4: Verify
        print("\n" + "=" * 60)
        print("Step 4: Verification")
        print("=" * 60)
        
        time.sleep(2)
        execute_command(ssh, "pm2 list")
        
        print("\n" + "=" * 60)
        print("UPDATE COMPLETE!")
        print("=" * 60)
        print("Test your bot by sending /start in Telegram")
        
    except Exception as e:
        print(f"[-] Error: {e}")
        sys.exit(1)
    finally:
        ssh.close()
        print("\n[*] Connection closed.")


if __name__ == "__main__":
    main()
