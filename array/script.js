const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 },
];
//1. Add New Students
//● Add three new students to the class with their grades.
students.push({ name: "amal", grade: 80 });
students.push({ name: "laila", grade: 80 });
students.push({ name: "ziad", grade: 80 });
console.log("1. Add New 3 Students");
console.log(students);
//2. Remove Last Student
//● Remove the last student from the list.
students.pop();
console.log("2. Remove Last Student");
console.log(students);
//3. Add Students at Beginning
//● Add two students at the beginning of the array.
students.unshift({ name: "mohamed", grade: 80 });
console.log("3. Add Students at Beginning");
console.log(students);
//4. Remove First Student
//● Remove the first student from the list.
students.shift();
console.log("4. Remove First Student");
console.log(students);

//5. High Achievers
//● Create a new array that includes only students who have grades greater than 90.
const newStudentsGrade = students.filter((student) => student.grade >= 90);
console.log("5. High Achievers");
console.log(newStudentsGrade);
//6. Sort by Grade
//● Sort the array of high achievers by grade in descending order.
students.sort((a, b) => b.grade - a.grade);
console.log("6. Sort by Grade");
console.log(students);
//7. Square the Grades
//● Create a new array that contains the square of each student's grade.
const newStudents = students.map((student) => student.grade * student.grade);
console.log("7. Square the Grades");
console.log(newStudents);
//8. Total Grade
//● Calculate the total grade sum of all students.
const totalGrade = students.reduce((acc, student) => acc + student.grade, 0);
console.log("8. Total Grade");
console.log(totalGrade);
//9. Are All Students Passing?
//● Check if all students have grades above 60.
console.log("9. Are All Students Passing?");
console.log(students.every((student) => student.grade > 50));
students.push({ name: "lolo", grade: 40 });
console.log(students);
console.log(students.every((student) => student.grade > 50));

//10. Is Anyone Failing?
//● Check if any student has a grade below 60.
console.log("10. Is Anyone Failing?");
console.log(students.every((student) => student.grade < 50));

//11. Find First Average Student
//● Find the first student who has a grade of 85
console.log("11.Find the first student who has a grade of 85");
console.log(students.find((student) => (student.grade = 85)));
