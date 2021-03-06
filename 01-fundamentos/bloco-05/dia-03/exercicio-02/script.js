function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Criar dias ----------
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysList = document.getElementById('days');

function createList(days) {
  const list = document.createElement("li");
  const text = document.createTextNode(days)
  
  if (days === 24 || days === 25 || days === 31) {
    list.classList.add('holiday')
  }

  if (days === 4 || days === 11 || days === 18 || days === 25) {
    list.classList.add('friday')
  }
  list.appendChild(text);

  list.classList.add('day');
  return list;
}

for(let days of dezDaysList) {
  daysList.appendChild(createList(days));
}

// Criar botao feriados ----------

const buttonContainer = document.getElementsByClassName('buttons-container');
const btnHoliday= document.createElement('button');
createButton('Feriados', 'btn-holiday', btnHoliday);
btnHoliday.addEventListener('click', holidayColor);
let color = false;

function createButton (name, id, btn) {
  btn.innerHTML = name;
  btn.id = id;
  buttonContainer[0].appendChild(btn);
}

function holidayColor() {
  holidayDays = document.querySelectorAll('.holiday');
  if (!color) {
    for (let i = 0; i < holidayDays.length; i += 1) {
      holidayDays[i].style.background = 'rgb(76,164,109)';
    }  
    color = true;
  }
  else {
    for (let i = 0; i < holidayDays.length; i += 1) {
      holidayDays[i].style.background = 'rgb(238,238,238)';
    }  
    color = false;
  }

}

// Criar botao sexta-feira ----------
const btnFriday = document.createElement('button');
createButton('Sexta-feira', 'btn-friday', btnFriday);
btnFriday.addEventListener('click', fridayText);
let sextou = false;

function fridayText() {
  fridayDays = document.querySelectorAll('.friday');
  if (!sextou) {
    for (let i = 0; i < fridayDays.length; i += 1) {
      fridayDays[i].innerText = 'SEXTOU!';
    }
    sextou = true;
  }
  else {
    for (let i = 0; i < fridayDays.length; i += 1) {
      fridayDays[i].innerHTML = (i * 7) + 4
    }
    sextou = false;
  }
}

// ZoomIn e ZoomOut ----------
days = document.querySelectorAll('.day');
for (let i = 0; i < days.length; i += 1) {
  days[i].addEventListener('mouseover', zoomIn);
  days[i].addEventListener('click', changeColor);
}

function zoomIn() {
  event.target.style.fontSize = '25px';

  event.target.addEventListener('mouseout', zoomOut);
}

function zoomOut() {
  event.target.style.fontSize = '20px';
}

// Minhas tarefas ----------
const taskContainer = document.querySelector('.my-tasks');

function createMyTasks(name) {  
  const text = document.createTextNode(name)
  const task = document.createElement('span');
  task.appendChild(text)
  taskContainer.appendChild(task);
}

createMyTasks('Cozinhar');

// Cor nas tarefas ----------

function taskColor(color) {
  const ColorContainer = document.createElement('div');
  ColorContainer.classList.add('task')
  ColorContainer.style.backgroundColor = color;
  taskContainer.appendChild(ColorContainer);
}

taskColor('green');

// Selecionar cor das tarefas ----------
let selectedTaskColor = '#777';

Colors = document.querySelectorAll('.task');
for (let i = 0; i < Colors.length; i += 1) {
  Colors[i].addEventListener('click', teste);
}

function teste() {
  if (event.target.classList != 'task selected') {
    selectedColor = document.querySelector('.task');

    event.target.classList.add('selected');
    selectedTaskColor = selectedColor.style.backgroundColor;
  }
  else {
    event.target.classList.remove('selected');
    selectedTaskColor = '#777';
  }
}

// Colocar a cor da tarefa no dia ----------
function changeColor() {
  event.target.style.color = selectedTaskColor;
}

// Adicionar compromissos -----------
const btnAdd = document.getElementById('btn-add');
const taskList = document.getElementsByClassName('task-list');
const input = document.getElementById('task-input');
btnAdd.addEventListener('click', addText);
input.addEventListener('keypress', Enter);

function addText() {
  if (input.value.length > 0) {
    taskList[0].appendChild(compromiseList(input.value));
  }
  else {
    alert('Preencha A parte de COMPROMISSOS!');
  }
}

function Enter() {
  if (event.code === 'Enter') {
    addText();
  }
}

function compromiseList(compromise) {
  const list = document.createElement("li");
  const text = document.createTextNode(compromise)
  list.appendChild(text);
  return list;
}

