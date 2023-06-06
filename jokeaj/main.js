let loadButton = document.getElementById("loadButton");
let showData = document.getElementById("showData");
let dateSelect = document.getElementById("dateSelect");
loadButton.addEventListener("click", loadServerData);

function loadServerData() {
    console.log("Load Server Data!");
    let selectedDate = dateSelect.value;
    let xmlHttpRequest;
    if (window.XMLHttpRequest) {
        xmlHttpRequest = new XMLHttpRequest();
    } else {
        alert("No XMLHttpRequest!");
        return;
    }
    xmlHttpRequest.open("GET", selectedDate+".txt", true);
    xmlHttpRequest.send();
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            showData.innerHTML = xmlHttpRequest.responseText;
            loadButton.style.visibility = "hidden";
        }
    }
}