// List of students
const students = [
  { name: "John", grade1: 8, grade2: 7 },
  { name: "Mary", grade1: 6, grade2: 9 },
  { name: "Peter", grade1: 7, grade2: 7.5 },
  { name: "Ana", grade1: 9, grade2: 8 },
  { name: "Carlos", grade1: 5, grade2: 6 },
];

// Function to calculate the average grade
function calculateAverage(grade1, grade2) {
  return (grade1 + grade2) / 2;
}

// Function to check success or failure of each student
function checkSuccess(students) {
  for (let student of students) {
    const average = calculateAverage(student.grade1, student.grade2);
    if (average >= 7) {
      alert(`${student.name} passed with an average of ${average.toFixed(2)}.`);
    } else {
      alert(`${student.name} failed with an average of ${average.toFixed(2)}.`);
    }
  }
}

checkSuccess(students);
