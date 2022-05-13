const user = (fullName) => {
  const email = fullName.split(' ').join('_') + '@trybe.com';
  return {
    nomeCompleto: fullName,
    email: email,
  }
};

const newEmployees = (user) => {
  const employees = {
    id1: user('Pedro Guerra'), // Nome: Pedro Guerra
    id2: user('Luiza Drumond'), // Nome: Luiza Drumond
    id3: user('Carla Paiva'), // Nome: Carla Paiva
  }
  return employees;
};

console.log(newEmployees(user));