//url fra adresselinjen
let urlString = window.location
//Vi konverterer url fra tekststeng til et objekt
let urlObject = new URL(urlString)
//Den div på siden hvor svar-beskeden skal stå
let messageDiv = document.getElementById("message")

//HTML indhold til svar-beskeden
//bemærk [+] asigner en værdi [+=] tilføjer mere til værdien
let html
html = "<h1>"
    html += "Hej "
    html += urlObject.searchParams.get("your-name")
html += "</h1>"

html += "<p>"
    html += "Tak for din besked"
html += "</p>"

html +="<p>"
    html += "Vi sender dig et svar til: "
    html += urlObject.searchParams.get("your-email")
html += "</p>"

messageDiv.innerHTML = html

document.body.style.backgroundColor = urlObject.searchParams.get("your-color")


let backBtn = document.getElementById("back-btn")

backBtn.onclick = function(){
    window.location = "index.html"
}