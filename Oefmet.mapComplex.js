const students = [
  { name: "Sarah", score: 85 },
  { name: "Tom", score: 90 },
];

const studentStrings = students.map(
  (student) => `${student.name}: ${student.score}`
);

console.log(studentStrings);
