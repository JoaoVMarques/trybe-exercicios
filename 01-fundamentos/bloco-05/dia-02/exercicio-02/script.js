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

  return list;
}

for(let days of dezDaysList) {
  daysList.appendChild(createList(days));
}

// Criar dias ----------

// Criar botoes ----------

const buttonContainer = document.getElementsByClassName('buttons-container');
const btn = document.createElement('button');
btn.addEventListener('click', holidayColor);
let color = false;

function createHolidayButton (name) {
  btn.innerHTML = name;
  btn.id = 'btn-holiday';
  buttonContainer[0].appendChild(btn);
}

function holidayColor() {
  holidayDays = document.querySelectorAll('.holiday');
  if (color === false) {
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

createHolidayButton('Feriados');