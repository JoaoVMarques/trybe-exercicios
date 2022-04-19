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
list.appendChild(createElements('li', 'Um'));
list.appendChild(createElements('li', 'Dois'));
list.appendChild(createElements('li', 'Tres'));
list.appendChild(createElements('li', 'Quatro'));
list.appendChild(createElements('li', 'Cinco'));
list.appendChild(createElements('li', 'Seis'));
list.appendChild(createElements('li', 'Sete'));
list.appendChild(createElements('li', 'Oito'));
list.appendChild(createElements('li', 'Nove'));
list.appendChild(createElements('li', 'Dez'));

function createElements(element, text) {
  let elements = document.createElement(element);
  elements.innerText = text;
  return elements;
}

sectionRight.appendChild(list)
for (let i = 0; i < 3; i += 1) {
  h3 = createElements('h3', 'Titulo',);
  h3.classList.add('description');
  main.appendChild(h3);
}

title.classList.add('title');

main.removeChild(sectionLeft);
