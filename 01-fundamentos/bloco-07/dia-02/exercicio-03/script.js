const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function modifyObject(object, key, value) {
  object[key] = value;
}

modifyObject(lesson2, 'turno', 'noite');
// console.log(lesson2);

function listKeyObject(object) {
  console.log(Object.keys(object));
}

function ObjectLength(object) {
  console.log(Object.keys(object).length);
}

function listValueObject(object) {
  console.log(Object.values(object));
}

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

function numStudents() {
  let students = 0;
  const obj = Object.keys(allLessons);
  for (let i = 0; i < Object.keys(allLessons).length; i += 1) {
    students += (allLessons[obj[i]].numeroEstudantes);
  }
  console.log(students);
}

function getValueByNumber(object, key) {
  console.log(Object.values(object)[key]);
}

function verifyPair(object, key, value) {
  const arr = Object.entries(object);

  let pair = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value ) {
      pair = true;
    }
  }
  console.log(pair);
}

listKeyObject(lesson2);
listValueObject(lesson2);
ObjectLength(lesson2);
numStudents();
getValueByNumber(lesson2, 0);
verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson3, 'materia', 'Maria Clara');