body = document.getElementsByTagName('body')[0];
let title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(title);

let main = document.createElement('main');
main.classList.add('main-content');
body.appendChild(main);

main.appendChild(createSection('center-content'));
sectionMain = document.getElementsByClassName('center-content')[0];

let paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nulla eos quisquam, eaque deleniti quia distinctio quibusdam.'
sectionMain.appendChild(paragraph);

main.appendChild(createSection('left-content'));
sectionLeft = document.getElementsByClassName('left-content')[0];
main.appendChild(createSection('right-content'));
sectionRight = document.getElementsByClassName('right-content')[0];

function createSection(className) {
  let section = document.createElement('section');
  section.classList.add(className)
  return section
}

let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.classList.add('small-image')
sectionLeft.appendChild(img);

list = document.createElement('ul');
list.appendChild(createLi('Um'))
list.appendChild(createLi('Dois'))
list.appendChild(createLi('Tres'))
list.appendChild(createLi('Quatro'))
list.appendChild(createLi('Cinco'))
list.appendChild(createLi('Seis'))
list.appendChild(createLi('Sete'))
list.appendChild(createLi('Oito'))
list.appendChild(createLi('Nove'))
list.appendChild(createLi('Dez'))



function createLi(text) {
  let li = document.createElement('li');
  li.innerText = text;
  return li;
}

sectionRight.appendChild(list)