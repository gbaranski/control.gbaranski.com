function setAlarmDataInPlace(jsonObject) {
  console.log(jsonObject);
  document.getElementById("alarmTime").innerText = jsonObject.alarmTime;
  let formattedRemainingTime = jsonObject.remainingTime.substring(0, 2) + "h" + " " + jsonObject.remainingTime.substring(3, 5) + "m";
  document.getElementById("remainingAlarmTime").innerText = formattedRemainingTime;
  document.getElementById("temperature").innerText = jsonObject.temperature + "\xB0C";
  document.getElementById("humidity").innerText = jsonObject.humidity + "%";
}


function getAlarmDataFromRemote() {

  let xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      setAlarmDataInPlace(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", "https://control.gbaranski.com/getAlarmESPData", true)
  xhttp.send();

}

function setAlarmTime() {
  let xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("GOOD RESPONSE");
      getAlarmDataFromRemote();
    } else {
      console.log("Something went wrong");
    }
  };
  let url = "https://control.gbaranski.com/setAlarm?time=" + document.getElementById("userDefinedAlarmTime").value;
  xhttp.open("GET", url, true);
  xhttp.send();
}

function setWaterMixerDataInPlace(jsonObject) {
  console.log(jsonObject)
  document.getElementById("waterMixerState").innerText = jsonObject.isTimerOn == "1" ? "ON" : "OFF";
  document.getElementById("waterMixerMinutes").innerText = Math.floor((jsonObject.remainingSeconds / 60) % 60) + "minutes";
  document.getElementById("waterMixerSeconds").innerText = jsonObject.remainingSeconds % 60 + "seconds";
}

function getWaterMixerDataFromRemote() {

  let xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      setWaterMixerDataInPlace(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", "https://control.gbaranski.com/getWaterMixerESPData", true)
  xhttp.send();
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
  getAlarmDataFromRemote();
  setInterval(getAlarmDataFromRemote, 10000);
  getWaterMixerDataFromRemote();
  setInterval(getWaterMixerDataFromRemote, 1000);
  $("#submitTime").click(function () {
    setAlarmTime();
  });
  $("#startMixingButton").click(function () {
    startMixingWater();
  });
});

window.onload = function () {
  console.log("123321312");
}
