from quart import (
    Quart, render_template, request, jsonify
)
import aiohttp
import asyncio
import async_timeout
import json

app = Quart(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

async def fetch(url):
    async with aiohttp.ClientSession() as session, async_timeout.timeout(100):
        async with session.get(url) as response:
            return await response.json()

async def sendTime(url):
    async with aiohttp.ClientSession() as session, async_timeout.timeout(100):
        async with session.get(url):
            return "OK"

@app.route('/')
async def handleMain():
    return await render_template("index.html")

@app.route('/getESPData')
async def handleEspDataRequest():
    espUrl = "http://192.168.1.110/getESPData"
    responses = await asyncio.gather(
        fetch(espUrl),
    )
    return responses[0]

@app.route('/setAlarmTime')
async def handleSetAlarmTime():
    time = request.args.get('time')
    espUrl = "http://192.168.1.110/setAlarm?time=" + time
    response = await asyncio.gather(
        sendTime(espUrl),
    )
    return "OK"

    
app.run(debug=True, host="0.0.0.0", port=80)