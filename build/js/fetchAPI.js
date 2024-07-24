"use strict";
let button = document.getElementById('gettext');
button.addEventListener('click', getText);
let outputdiv = document.getElementById('output');
let outputText = document.createElement('p');
//fetching data from a text files
function getText() {
    fetch('../src/sample.txt')
        .then(res => { return res.text(); })
        .then(data => {
        outputText.innerHTML = `<p>${data}</p>`;
        outputdiv.appendChild(outputText);
    });
}
