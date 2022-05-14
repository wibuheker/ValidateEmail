import requests
from libs.utils import UserAgent
from bs4 import BeautifulSoup


class Yahoo:

    uri = 'https://login.yahoo.com/account/create?specId=yidReg&lang=en-US&src=&done=https%3A%2F%2Fwww.yahoo.com&display=login'
    ajax = 'https://login.yahoo.com/account/module/create?validateField=userId'
    session = requests.Session()
    session.headers = {
        'User-Agent': UserAgent().random,
        'Accept-Language': 'en'
    }
    
    @classmethod
    def fetchPage(cls) -> bool:
        response = cls.session.get(cls.uri)
        
        if response.status_code != 200: return False

        soup = BeautifulSoup(response.text, 'html.parser')
        inputs = soup.find_all('input')
        fields = {}
        
        for inp in inputs:
            name = inp.get('name')
            value = inp.get('value')
            if name and value != None: fields[name] = value

        return fields
    
    @classmethod
    def verify(cls, email: str):
        fields = cls.fetchPage()
        
        if not fields: return False
        fields['userId'] = email.split('@')[0]
        cls.session.headers.update({
            'Origin': 'https://login.yahoo.com',
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'Referer': cls.uri,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.8,ar;q=0.6',
        })
        response = cls.session.post(cls.ajax, data=fields)
        isValid = False
        
        if response.status_code != 200: return isValid
        
        json = response.json()
        if json.get('errors', None):
            for error in json['errors']:
                if error['name'] == 'userId' and error['error'] == 'IDENTIFIER_EXISTS':
                    isValid = True
                    break
            return isValid
        else:
            return isValid