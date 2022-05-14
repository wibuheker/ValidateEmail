from socket import *

class Socket_:

    def __init__(self, mx_host: str, mx_port: int = 25):
        self.mx_host = mx_host
        self.mx_port = mx_port
        self.email = ''
        self.verifer = 'c7e@heker.me'
    
    def setEmail(self, email: str):
        self.email = email
    
    def check(self):
        client = socket(AF_INET, SOCK_STREAM)
        client.connect((self.mx_host, self.mx_port))
        recv = client.recv(1024)
        recv = recv.decode()
        if not recv.startswith('220'):
            client.close()
            return False
        
        client.send('HELO heker.me\r\n'.encode())
        recv = client.recv(1024)
        recv = recv.decode()
        if not recv.startswith('250'):
            client.close()
            return False
        
        client.send(f'MAIL FROM: <{self.verifer}>\r\n'.encode())
        recv = client.recv(1024)
        recv = recv.decode()
        if not recv.startswith('250'):
            client.close()
            return False
        
        client.send(f'RCPT TO: <{self.email}>\r\n'.encode())
        recv = client.recv(1024)
        recv = recv.decode()
        if not recv.startswith('250'):
            client.close()
            return False
        
        client.send('QUIT\r\n'.encode())
        recv = client.recv(1024)
        recv = recv.decode()
        client.close()

        return True