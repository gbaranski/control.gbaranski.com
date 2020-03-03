var DLspeedBitSize;
var FLsizeBitSize;

function changeDLspeedUnit(selectedDLspeedUnit) {
  switch (selectedDLspeedUnit) {
    case "Kbs":
      document.getElementById("dropdownDLspeed").innerHTML = "Kb/s";
      DLspeedBitSize = 1;
      break;
    case "Mbs":
      document.getElementById("dropdownDLspeed").innerHTML = "Mb/s";
      DLspeedBitSize = 1024;
      break;
    case "Gbs":
      document.getElementById("dropdownDLspeed").innerHTML = "Gb/s";
      DLspeedBitSize = 1048576;
      break;
  }
  calcDLtime();
}

function changeFLsizeUnit(selectedFileSizeUnit) {
  switch (selectedFileSizeUnit) {
    case "KB":
      document.getElementById("dropdownFLsize").innerHTML = "KB";
      FLsizeBitSize = 1;
      break;
    case "MB":
      document.getElementById("dropdownFLsize").innerHTML = "MB";
      FLsizeBitSize = 1024;
      break;
    case "GB":
      document.getElementById("dropdownFLsize").innerHTML = "GB";
      FLsizeBitSize = 1048576;
      break;
  }
  calcDLtime();
}

function calcDLtime() {
  var FLsize = document.getElementById("FLsize").value;
  var DLspeed = document.getElementById("DLspeed").value;
  if (DLspeed == "" && FLsize == "") {
    document.getElementById("resultTime").innerHTML = "Download speed and file size are empty!";
    return;
  }
  if (DLspeed == "") {
    document.getElementById("resultTime").innerHTML = "Download speed is empty!";
    return;
  }
  if (FLsize == "") {
    document.getElementById("resultTime").innerHTML = "File size is empty!";
    return;
  }
  if (Math.sign(DLspeed) != 1 || Math.sign(FLsize) != 1) {
    document.getElementById("resultTime").innerHTML =
      "<small>You have put some invalid, we only accept positive numbers larger than zero &#10069;</small>";
    return;
  }
  var DLtime = (FLsize * 8 * FLsizeBitSize) / (DLspeed * DLspeedBitSize);
  DLtime = Math.round(DLtime);
  document.getElementById("resultTime").value = DLtime;
  var duration = moment.duration(DLtime, "seconds");
  var formatted = duration.format('Y [years] D [days] H [hours] m [minutes] s [seconds]');
  document.getElementById("resultTime").innerHTML = formatted;
}