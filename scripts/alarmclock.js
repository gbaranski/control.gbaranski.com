function setAlarmDataInPlace(jsonObject) {
  console.log(jsonObject);
  document.getElementById("alarmTime").innerText = jsonObject.alarmTime;
  let formattedRemainingTime = jsonObject.remainingTime.substring(0, 2) + "h" + " " + jsonObject.remainingTime.substring(3, 5) + "m";
  document.getElementById("remainingAlarmTime").innerText = formattedRemainingTime;
  document.getElementById("temperature").innerText = jsonObject.temperature + "\xB0C";
  document.getElementById("humidity").innerText = jsonObject.humidity + "%";
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
  let url = "https://control.gbaranski.com/setAlarm?time=" + document.getElementById("userDefinedAlarmTime").value;
  xhttp.open("GET", url, true);
  xhttp.send();
}


$(function () {
  getAlarmDataFromRemote();
  setInterval(getAlarmDataFromRemote, 2000);
  $("#submitTime").click(function () {
    setAlarmTime();
  });
});