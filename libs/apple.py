import json
import re
import js2py
import requests
from libs.agent import UserAgent

class Apple:


    def __init__(self, email: str) -> None:
        self.url = 'https://iforgot.apple.com'
        self.ua = UserAgent().random
        self.session = requests.Session()
        self.session.headers = {
            'User-Agent': self.ua,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
            'Referer': 'https://iforgot.apple.com/'
        }
        self.email = email
    
    def get_token(self) -> str:
        js_data = self.js_data
        js_data = js_data.replace('5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36', self.ua.split('/', 1)[1])
        js_data = js_data.replace('Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36', self.ua)
        token = js2py.eval_js(js_data)
        return token
    
    @property
    def js_data(self) -> str:
        js_data = open('data/apple_token.js', 'r').read()
        return js_data
    
    def fetchPage(self) -> bool:
        r = self.session.get(self.url)
        if r.status_code == 200:
            sst = re.findall(r'sstt":"(.*?)"', r.text)[0]
            return sst
        else:
            print('[!] Failed to fetch page')
            return False
    
    @property
    def check(self) -> bool:
        sstt = self.fetchPage()
        if not sstt:
            return False
        token = self.get_token()
        self.session.headers.update({
            'Origin': 'https://iforgot.apple.com',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'sstt': sstt,
            'X-Apple-I-FD-Client-Info': json.dumps({
                'U': self.ua,
                'L': 'en-US',
                'Z': 'GMT+07:00',
                'V': '1.1',
                'F': token
            }),
            'X-Requested-With': 'XMLHttpRequest'
        })
        r = self.session.post(f'{self.url}/password/verify/appleid', json={'id': self.email}, allow_redirects=False)
        redirect_location = r.headers['Content-Location']
        if '/password/verify' in redirect_location:
            return True
        else:
            return False

    


