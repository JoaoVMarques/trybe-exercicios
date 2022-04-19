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

function createSection(className) {
  let section = document.createElement('section');
  section.classList.add(className)
  return section
}

let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.classList.add('small-image')
sectionLeft.appendChild(img);