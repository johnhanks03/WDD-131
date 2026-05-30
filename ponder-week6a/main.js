function convert(grade) {
  let points;
  switch (grade) {
    case 'A':
      points = 4;
      break;
    case 'B':
      points = 3;
      break;
    case 'C':
      points = 2;
      break;
    case 'D':
      points = 1;
      break;
    case 'F':
      points = 0;
      break;
    default:
      alert('not a valid grade');
  }
  return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
  { last: 'Andrus', first: 'Aaron' },
  { last: 'Masa', first: 'Manny' },
  { last: 'Tanda', first: 'Tamanda' }
];

words.forEach(word => console.log(word));

const listElement = document.querySelector('#list');
words.forEach(word => {
  const li = document.createElement('li');
  li.textContent = word;
  listElement.appendChild(li);
});

const grades = ['A', 'B', 'A', 'C', 'F'];
const gradePoints = grades.map(convert);
console.log(gradePoints);

const longWords = words.filter(word => word.length > 6);
console.log(longWords);

const numbers = [125, 20, 5];

function myFunc(total, num) {
  return total - num;
}

const reduced = numbers.reduce(myFunc);
document.getElementById('output').textContent = reduced;
console.log(reduced);

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const index = fruits.indexOf('Apple');
console.log(index);

const studentsDiv = document.querySelector('#students');

students.forEach(student => {
  const row = `
    <div>${student.first} ${student.last}</div>
  `;
  studentsDiv.innerHTML += row;
});