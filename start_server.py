#!/usr/bin/env python3
"""Start missing server process"""
import paramiko
import json
import sys
import io

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
    
    # Start server
    print("Starting phuket-server...")
    stdin, stdout, stderr = ssh.exec_command('cd /root/phuket-food-bot/server && pm2 start dist/index.js --name phuket-server')
    stdout.channel.recv_exit_status()
    print(stdout.read().decode())
    print(stderr.read().decode())
    
    # Save PM2 config
    stdin, stdout, stderr = ssh.exec_command('pm2 save')
    stdout.channel.recv_exit_status()
    
    # Get status
    stdin, stdout, stderr = ssh.exec_command('pm2 jlist')
    data = json.loads(stdout.read().decode())
    
    print("\n" + "=" * 50)
    print("PM2 Process Status")
    print("=" * 50)
    
    for p in data:
        name = p.get('name', 'unknown')
        status = p.get('pm2_env', {}).get('status', 'unknown')
        restarts = p.get('pm2_env', {}).get('restart_time', 0)
        print(f"  {name}: {status} (restarts: {restarts})")
    
except Exception as e:
    print(f"Error: {e}")
finally:
    ssh.close()
    print("\nDone!")
