const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const avarageGradeMath = (index) => grades[index]
  .reduce((acc, curr) => acc + curr, 0) / grades[index].length;

const studentAverage = () => students.map((person, index) => {
    const avarageGrade = avarageGradeMath(index);
    return {
      name: person,
      average: avarageGrade
    }
  })

console.log(studentAverage());