const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const examAutocorrect = (correctAnswers, answersProvided, fn) => {
 let score = 0
 for (let i = 0; i < correctAnswers.length; i += 1) {
  score += fn(correctAnswers[i], answersProvided[i])
 }
 return score
}
const operatorAnswers = (correct, provided) => {
  if (provided === "N.A") {
      return 0;
  } else if (provided === correct) {
      return 1
  } else {
      return -0.5;
  }
}
console.log(examAutocorrect(RIGHT_ANSWERS, STUDENT_ANSWERS, operatorAnswers));