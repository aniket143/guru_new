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
