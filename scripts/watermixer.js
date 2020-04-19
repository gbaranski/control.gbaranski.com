function setWaterMixerDataInPlace(jsonObject) {
    console.log(jsonObject)
    document.getElementById("waterMixerState").innerText = jsonObject.isTimerOn == "1" ? "ON" : "OFF";
    document.getElementById("waterMixerMinutes").innerText = Math.floor((jsonObject.remainingSeconds / 60) % 60) + "minutes";
    document.getElementById("waterMixerSeconds").innerText = jsonObject.remainingSeconds % 60 + "seconds";
}

function getWaterMixerDataFromRemote() {
    if (document.hasFocus()) {
        let xhttp = new XMLHttpRequest;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                setWaterMixerDataInPlace(JSON.parse(this.responseText));
            }
        };
        xhttp.open("GET", "https://control.gbaranski.com/getWaterMixerESPData", true)
        xhttp.send();
    } else {
        console.log("Window not focused");
    }

}

function startMixingWater() {
    let xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("GOOD RESPONSE");
            getWaterMixerDataFromRemote();
        } else {
            console.log("Something went wrong");
        }
    };
    xhttp.open("GET", "https://control.gbaranski.com/startMixing", true)
    xhttp.send();
}

$(function () {
    getWaterMixerDataFromRemote();
    setInterval(getWaterMixerDataFromRemote, 10000);
    $("#startMixingButton").click(function () {
        startMixingWater();
    });
});