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

listKeyObject(lesson2);
listValueObject(lesson2);
ObjectLength(lesson2);