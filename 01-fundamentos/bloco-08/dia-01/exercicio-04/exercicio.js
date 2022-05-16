const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (rigthAnswer, studentAnswer) => {
  if (rigthAnswer === studentAnswer) {
    return 1;
  }
  if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}

const countGrade = (rigthAnswer, studentAnswer, compare) => {
  let count = 0;
  for (let i = 0; i < rigthAnswer.length; i += 1) {
    count += compare(rigthAnswer[i], studentAnswer[i]);
    // console.log(`Nota:${count} | Rigth: ${rigthAnswer[i]} | Student: ${studentAnswer[i]}`);
  }
  return count;
}

console.log(countGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));