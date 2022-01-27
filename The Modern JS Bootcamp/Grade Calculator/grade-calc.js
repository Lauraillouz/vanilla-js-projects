let calculateGrade = (studentScore = 0, maxScore = 20) => {
  let grade = studentScore / maxScore;
  let percentGrade = grade * 100;
  let abcGrade;
  if (percentGrade <= 59) {
    abcGrade = 'F';
  } else if (percentGrade >= 60 && percentGrade <= 69) {
    abcGrade = 'D';
  } else if (percentGrade >= 70 && percentGrade <= 79) {
    abcGrade = 'C';
  } else if (percentGrade >= 80 && percentGrade <= 89) {
    abcGrade = 'B';
  } else if (percentGrade >= 90 && percentGrade <= 100) {
    abcGrade = 'A';
  } else {
    return 'wrong';
  }
  console.log(
    `${studentScore}/${maxScore} -> You got a ${abcGrade} (${percentGrade}%)`
  );
};

calculateGrade(12);
