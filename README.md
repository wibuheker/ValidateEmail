# Validator Email <br>

Hanya kegabutan yang tidak berfaidah

<br>

## Install
```
git clone https://github.com/wibuheker/ValidateEmail
cd ValidatorEmail
pip install -r requirements.txt
```

<br>

## Usage
```
usage: run.py [-h] -e EMAIL [-t {normal,thread}] [--threads THREADS]

Check if an email is valid.

optional arguments:
  -h, --help            show this help message and exit
  -e EMAIL, --email EMAIL
                        Email to check / List Of Email (File.txt).
  -t {normal,thread}, --type {normal,thread}
                        Type of check Normal or Thread
  --threads THREADS     Number of threads to use
  ```