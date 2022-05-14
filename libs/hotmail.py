import re
import requests
from libs.utils import UserAgent


class Hotmail:

    uri = 'https://login.live.com/'
    session = requests.Session()
    session.headers = {
        'User-Agent': UserAgent().random,
        'Accept-Language': 'en'
    }

    @classmethod
    def fetchPage(cls) -> bool:
        response = cls.session.get(cls.uri)
        
        if response.status_code != 200: return False

        cookies = response.cookies.get_dict()
        ajax_uri = re.findall(r'bv:\'(.*?)\'', response.text)[0]
        return {
            'cookies': cookies,
            'ajax_uri': ajax_uri
        }
    
    @classmethod
    def verify(cls, email: str):
        cookies = cls.fetchPage()

        if not cookies: return False

        cookies = cls.fetchPage()
        if not cookies: return False

        fields = {
            'username': email.lower(),
            'forceotclogin': False,
            'isCookieBannerShown': False,
            'flowToken': 'DSVPwBopH4qglVYx2fJtcc7Ci3LD4eoCvj2EXGT1F9ibpqbUn8YJlT7GGMK8rslGzZNDSXKGZzkUC3qLF88a4BaVAfyvkUN9QAHIAV7G4WVIBwCzeBhsr5QDHE3Muu0AU5b1!qsunD3WXBoLsMd7o74l8GV3CRFg9qMx0LHuVvFcuZQIlYsQgifWun7NCnJmiyOV1fbBfc2kAPGKfTMeu*FcKNpqqQZh9apJLWGfre*ar0w!Nimck*CRuLwGfCOU1A$$',
            'isExternalFederationDisallowed': False,
            'isFidoSupported': True,
            'isOtherIdpSupported': False,
            'isRemoteConnectSupported': False,
            'isRemoteNGCSupported': True,
            'isSignup': False,
            'otclogindisallowed': False,
            'checkPhones': False,
            'federationFlags': 3
        }
        fields['uaid'] = cookies['cookies'].get('uaid')

        headers = {
            'Origin': 'https://login.live.com',
            'User-Agent': UserAgent().random,
            'hpgid': '33',
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
            'Referer': cls.uri,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.8,ar;q=0.6',
        }

        response = cls.session.post(cookies['ajax_uri'], json=fields, headers=headers)
        isValid = False
        
        if response.status_code != 200: return isValid
        
        json = response.json()
        return json