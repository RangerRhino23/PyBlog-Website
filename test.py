from flask import Flask, render_template

app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route("/")
def index():
    variable = 'xyz'
    return render_template('test.html', context = variable)



app.run('localhost', 5000)