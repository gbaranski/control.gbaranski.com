from flask import Flask
from flask import render_template
from flask import request
from flask import Response

import requests

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/')
def handleMain():
    return render_template("index.html")

@app.route('/getESPData')
def handleEspDataRequest():
    espUrl = "http://192.168.1.110/getESPData"
    return requests.get(url=espUrl).json()

@app.route('/setAlarmTime')
def handleSetAlarmTime():
    print(request.args.get("time"))
    time = request.args.get('time')
    espUrl = "http://192.168.1.110/setAlarm?time=" + time
    r = requests.get(espUrl)
    if r.status_code == 200:
        print("OK")
        return Response(status=200)
    else:
        print("NOTOK")
        return "NOT OK"

    


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)