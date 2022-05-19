import argparse
from colorama import Fore
from libs.apple import Apple
from libs.yahoo import Yahoo
from libs.socket_ import Socket_
from libs.thread import ThreadPool
from libs.utils import find_mx_record, get_domain

def Check(email: str):
    domain = get_domain(email)
    
    isValid = False
    
    if 'yahoo' in domain:
        isValid = Yahoo.verify(email)
    elif 'icloud.com' in domain:
        isValid = Apple(email).check
    else:
        mx_ip = find_mx_record(domain)
        socks = Socket_(mx_ip)
        socks.setEmail(email)
        isValid = socks.check()
    
    if isValid:
        print(f'[+] {email} -> {Fore.GREEN}VALID{Fore.RESET}.')
    else:
        print(f'[-] {email} -> {Fore.RED}INVALID{Fore.RESET}.')

if __name__ == '__main__':

    parser = argparse.ArgumentParser(description='Check if an email is valid.')
    parser.add_argument('-e', '--email', help='Email to check / List Of Email (File.txt).', required=True)
    parser.add_argument('-t', '--type', help='Type of check Normal or Thread', choices=['normal', 'thread'], default='normal')
    parser.add_argument('--threads', help='Number of threads to use', default=10)
    
    args = parser.parse_args()

    if not args.email.endswith('.txt'):
        Check(args.email)
    else:
        with open(args.email, 'r') as f:
            emails = [e.strip() for e in f.readlines()]
        if args.type == 'normal':
            for email in emails:
                Check(email)
        elif args.type == 'thread':
            pool = ThreadPool(int(args.threads))
            for email in emails:
                pool.add_task(Check, email)
            pool.wait_completion()
