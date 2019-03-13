//Her skal du skrive din typescriptkode

let nyTekst = document.createTextNode("Vingummibamser");

let nytElement = document.createElement("li");
nytElement.setAttribute("id", "5");
nytElement.setAttribute("class", "usundt");
nytElement.appendChild(nyTekst);

let sundListe = document.getElementById("liste");
sundListe.appendChild(nytElement);

for (let index = 0; index < sundListe.childElementCount+5; index++) {
    const element = sundListe.childNodes[index];
    console.log(element.textContent);
}

let nyKnap = document.createElement("button")
let nyKnapTekst = document.createTextNode("knap")
nyKnap.appendChild(nyKnapTekst)
let findDiv = document.getElementById("finddiv")
findDiv.appendChild(nyKnap)
nyKnap.addEventListener("click", popUp)


function popUp(){
    alert("Du har trykket på en knap")
}