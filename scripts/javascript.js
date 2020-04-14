function setDataInPlace(jsonObject) {
  console.log(jsonObject);
  document.getElementById("alarmTime").innerText = jsonObject.alarmTime;
  let formattedRemainingTime = jsonObject.remainingTime.substring(0, 2) + "h" + " " + jsonObject.remainingTime.substring(3, 5) + "m";
  document.getElementById("remainingAlarmTime").innerText = formattedRemainingTime;
  document.getElementById("temperature").innerText = jsonObject.temperature + "\xB0C";
  document.getElementById("humidity").innerText = jsonObject.humidity + "%";
}


function getDataFromRemote() {

  let xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      setDataInPlace(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", "http://control.gbaranski.com/getESPData", true)
  xhttp.send();
  setTimeout(getDataFromRemote, 10000);

}

function setAlarmTime() {
  let xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("GOOD RESPONSE");
    } else {
      console.log("Something went wrong");
    }
  };
  let url = "http://control.gbaranski.com/setAlarmTime?time=" + document.getElementById("userDefinedAlarmTime").value;
  xhttp.open("GET", url, true);
  xhttp.send();
}


$(function () {
  getDataFromRemote();
  $("#submitTime").click(function () {
    setAlarmTime();
  });
});

window.onload = function () {
  console.log("123321312");
}
