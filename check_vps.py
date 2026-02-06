#!/usr/bin/env python3
"""Check VPS deployment status"""
import paramiko
import json
import sys
import io

# Force UTF-8 output
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

VPS_HOST = "109.73.199.60"
VPS_USER = "root"
VPS_PASSWORD = "eaACMy*w+5L+_w"

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    print(f"Connecting to {VPS_HOST}...")
    ssh.connect(VPS_HOST, username=VPS_USER, password=VPS_PASSWORD, timeout=30)
    print("Connected!\n")
    
    # Get PM2 status as JSON
    stdin, stdout, stderr = ssh.exec_command('pm2 jlist')
    data = json.loads(stdout.read().decode())
    
    print("=" * 50)
    print("PM2 Process Status")
    print("=" * 50)
    
    for p in data:
        name = p.get('name', 'unknown')
        status = p.get('pm2_env', {}).get('status', 'unknown')
        uptime = p.get('pm2_env', {}).get('pm_uptime', 0)
        restarts = p.get('pm2_env', {}).get('restart_time', 0)
        
        print(f"  {name}: {status} (restarts: {restarts})")
    
    print("")
    
    # Check if phuket processes are running
    stdin, stdout, stderr = ssh.exec_command('pm2 logs --lines 10 --nostream 2>&1 | head -30')
    logs = stdout.read().decode()
    print("Recent logs:")
    print("-" * 50)
    # Filter only ASCII printable chars
    safe_logs = ''.join(c if ord(c) < 128 else '?' for c in logs)
    print(safe_logs)
    
except Exception as e:
    print(f"Error: {e}")
finally:
    ssh.close()
    print("\nConnection closed.")
