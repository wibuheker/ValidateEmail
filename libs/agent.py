import re, random
from user_agent import generate_user_agent

class UserAgent:

    def __init__(self):
        self.random = self.Generate()
    
    def Generate(self):
        browser = random.choice([
            'chrome',
            'firefox'
        ])
        ua = generate_user_agent(os=['mac'], device_type='desktop', navigator=browser)
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