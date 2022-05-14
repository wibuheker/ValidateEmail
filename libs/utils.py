import re, random
import dns.resolver
from user_agent import generate_user_agent

class UserAgent:

    def __init__(self):
        self.random = self.Generate()
    
    def Generate(self):
        browser = random.choice([
            'chrome',
            'firefox'
        ])
        ua = generate_user_agent(os=['mac', 'win', 'linux'], device_type='desktop', navigator=browser)
        return self.ChangeVersion(ua, browser)
    
    def ChangeVersion(self, ua, browser):
        version = None
        if browser == 'chrome':
            version = f"{random.randint(77, 84)}.0.2{random.randint(6, 8)}{random.randint(2, 6)}{random.randint(0, 8)}.{random.randint(20, 99)}"
        elif browser == 'firefox':
            version = f"{random.randint(73, 81)}.0"
            date = [
                20180101,
                20190101,
                20200101,
                20200201,
                20200407,
                20200308
            ]
            ua = re.sub(r'Gecko\/([\d.]+)',  f"Gecko/{str(random.choice(date))}", ua)
        else:
            return None
        rEgex = re.sub(r'{}\/([\d.]+)'.format(browser.capitalize()), "{browser}/{version}".format(browser=browser.capitalize(), version=version), ua)
        return rEgex

def get_domain(email):
    return email.split('@')[1]

def min_(values: list):
    min_value = min(values)
    min_index = values.index(min_value)
    return min_index

def isIpaddr(string: str):
    parts = string.split('.')
    if len(parts) != 4:
        return False

    for part in parts:
        if not part.isdigit():
            return False
        if int(part) > 255:
            return False
    return True    

def find_mx_record(domain):
    mx = dns.resolver.resolve(domain, 'MX')
    mx_hosts = []
    mx_weights = []
    mx_ip = ''
    
    isAddr = isIpaddr(domain)

    if isAddr:
        mx_ip = domain
    else:
        for x in mx:
            host = x.exchange.to_text()
            weight = x.preference
            mx_hosts.append(host)
            mx_weights.append(int(weight))
    
    if len(mx_hosts) > 0:
        search_index = min_(mx_weights)
        mx_ip = mx_hosts[search_index]
    else:
        record_a = dns.resolver.resolve(domain, 'A')[0].to_text()
        mx_ip = record_a
    return mx_ip[:-1]