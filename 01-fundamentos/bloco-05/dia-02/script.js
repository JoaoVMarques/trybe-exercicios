body = document.getElementsByTagName('body')[0];
let title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(title);

let main = document.createElement('main');
main.classList.add('main-content');
body.appendChild(main);

let sectionMain = document.createElement('section');
sectionMain.classList.add('center-content');
main.appendChild(sectionMain);

let paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nulla eos quisquam, eaque deleniti quia distinctio quibusdam.'
sectionMain.appendChild(paragraph);
