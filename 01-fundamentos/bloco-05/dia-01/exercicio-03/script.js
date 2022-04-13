const header = document.getElementById('header-container');
header.style.background = 'rgb(0, 176, 105)';

const urgentes = document.getElementsByClassName('emergency-tasks');
for (let index = 0; index < urgentes.length; index += 1) {
  urgentes[index].style.background = 'rgb(255, 159, 132)';
}

const naoUrgentes = document.getElementsByClassName('no-emergency-tasks');
for (let index = 0; index < naoUrgentes.length; index += 1) {
  naoUrgentes[index].style.background = 'rgb(249, 219, 94)';
}

const naoUrgentesTitles = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < naoUrgentesTitles.length; index += 1) {
  naoUrgentesTitles[index].style.background = 'rgb(35, 37, 37)';
}

const UrgentesTitles = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < UrgentesTitles.length; index += 1) {
  UrgentesTitles[index].style.background = 'rgb(165, 0, 243)';
}

const footer = document.getElementById('footer-container');
footer.style.background = 'rgb(0, 53, 51)';