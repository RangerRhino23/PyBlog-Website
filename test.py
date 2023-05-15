from flask import Flask, render_template

app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route("/")
def index():
    return render_template('test.html')

app.run('localhost', 5000)