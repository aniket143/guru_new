// Phonegap Barcode scanner
// Author: Umer Pasha
// Date: 8/26/14

var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	alert("init");
	document.querySelector("#startScan").addEventListener("click", startScan, false);
	resultDiv = document.querySelector("#results");
}

function startScan() {
	alert("startscan");

//	cordova.plugins.barcodeScanner.scan(
cordova.plugins.barcodeScanner.scan(
		function (result) {
				alert("startscan2");

			var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = s;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}

navigator.Backbutton.goHome(function() {
  console.log('success')
}, function() {
  console.log('fail')
});

function cameratakpic(){
	alert("hi");
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });
}
function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
