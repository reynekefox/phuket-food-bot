#!/usr/bin/env python3
"""Check and restart services on VPS"""

import paramiko
import sys
import os

os.environ['PYTHONIOENCODING'] = 'utf-8'

VPS_HOST = "109.73.199.60"
VPS_USER = "root"
VPS_PASSWORD = "eaACMy*w+5L+_w"


def execute_command(ssh, command, timeout=60):
    print(f"\n[CMD] {command}")
    stdin, stdout, stderr = ssh.exec_command(command, timeout=timeout)
    exit_status = stdout.channel.recv_exit_status()
    
    try:
        output = stdout.read().decode('utf-8', errors='replace').strip()
        error = stderr.read().decode('utf-8', errors='replace').strip()
    except:
        output = "Output decode error"
        error = ""
    
    if output:
        print(f"[OUT]\n{output}")
    if error:
        print(f"[ERR]\n{error}")
    
    return exit_status


def main():
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        print("[*] Connecting to VPS...")
        ssh.connect(VPS_HOST, username=VPS_USER, password=VPS_PASSWORD, timeout=30)
        print("[+] Connected!")
        
        execute_command(ssh, "pm2 restart phuket-bot")
        execute_command(ssh, "pm2 list")
        
        print("\n[+] Done! Test your bot in Telegram with /start")
        
    except Exception as e:
        print(f"[-] Error: {e}")
        sys.exit(1)
    finally:
        ssh.close()


if __name__ == "__main__":
    main()
