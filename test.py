from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'This is my first website!'

app.run('localhost', 5000)