function setAlarmDataInPlace(jsonObject) {
  console.log(jsonObject);
  document.getElementById("alarmTime").innerText = jsonObject.alarmTime;
  let formattedRemainingTime = jsonObject.remainingTime.substring(0, 2) + "h" + " " + jsonObject.remainingTime.substring(3, 5) + "m";
  document.getElementById("remainingAlarmTime").innerText = formattedRemainingTime;
  document.getElementById("temperature").innerText = jsonObject.temperature + "\xB0C";
  document.getElementById("humidity").innerText = jsonObject.humidity + "%";
  if (jsonObject.alarmState == "1") {
    document.getElementById("alarmState").innerText = "ON";
  } else {
    document.getElementById("alarmState").innerText = "OFF";
  }

}


function getAlarmDataFromRemote() {
  if (document.hasFocus()) {
    let xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        setAlarmDataInPlace(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "https://control.gbaranski.com/getAlarmESPData", true)
    xhttp.send();
  }

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
  const url = "https://control.gbaranski.com/setAlarm?time=" + document.getElementById("userDefinedAlarmTime").value;
  console.log("URL:" + url);
  xhttp.open("GET", url, true);
  xhttp.send();
}

function switchAlarmState() {
  let xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("GOOD RESPONSE");
    } else {
      console.log("Something went wrong");
    }
  };
  const url = "https://control.gbaranski.com/setAlarmState?state=" +
    document.getElementById("alarmState").innerText == "ON" ? "1" : "0";
  xhttp.open("GET", url, true);
  xhttp.send();
}


$(function () {
  getAlarmDataFromRemote();
  setInterval(getAlarmDataFromRemote, 2000);
  $("#submitTime").click(function () {
    setAlarmTime();
  });
  $("#switchAlarmState").click(function () {
    switchAlarmState();
  });
});