"use strict";
let button = document.getElementById('gettext');
button.addEventListener('click', getText);
let outputdiv = document.getElementById('output');
let outputText = document.createElement('p');
//fetching data from a text file!
function getText() {
    fetch('../src/sample.txt')
        .then(res => { return res.text(); })
        .then(data => {
        outputText.innerHTML = `<p>${data}</p>`;
        outputdiv.appendChild(outputText);
    });
}
//Fetching data from a local users.json file
//and placing it onto the DOM users div
let getUsersButton = document.getElementById('getusersbutton');
let usersdiv = document.getElementById('getusersdiv');
getUsersButton.addEventListener('click', getUsersfromJson);
function getUsersfromJson() {
    fetch('../src/users.json')
        .then(res => res.json())
        .then(data => {
        for (const user in data) {
            let userUL = document.createElement('ul');
            userUL.setAttribute('id', 'usersUL');
            userUL.style.listStyle = 'none';
            userUL.style.backgroundColor = '#FFFFE0';
            let userpropsid = document.createElement('li');
            userpropsid.innerText = `ID: ${data[user].id}`;
            let userpropsname = document.createElement('li');
            userpropsname.innerText = `NAME: ${data[user].name}`;
            let userpropsemail = document.createElement('li');
            userpropsemail.innerText = `EMAIL: ${data[user].email}`;
            userUL.appendChild(userpropsid);
            userUL.appendChild(userpropsname);
            userUL.appendChild(userpropsemail);
            usersdiv.appendChild(userUL);
        }
    });
}
