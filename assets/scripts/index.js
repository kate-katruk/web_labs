const fullName = ['Kateryna Katruk', 'Катерина Катрук'];
const city = ['Vinnytsia, Ukraine', 'Вінниця, Україна'];
const expectations = [
  `My expectations from the course: 
  - to gain development experience in HTML, CSS, JavaScript;
  - learn about the principles of working with frameworks Node.js, React.js, Angular.js
  `,
  `Мої очікування від курсу: 
  - отримати досвід розробки в HTML, CSS, JavaScript; 
  - дізнатися про принципи роботи з фреймворками Node.js, React.js, Angular.js
  `,
];
const skill = ['Programming expirience', 'Досвід програмування'];
const group = ['Group KP-03', 'Група КП-03'];

const checkbox = document.getElementById('language-toggle');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    document.getElementById('fullName').innerHTML = fullName[1];
    document.getElementById('city').innerHTML = city[1];
    document.getElementById('expectations').innerHTML = expectations[1];
    document.getElementById('skill').innerHTML = skill[1];
    document.getElementById('group').innerHTML = group[1];
  } else {
    document.getElementById('fullName').innerHTML = fullName[0];
    document.getElementById('city').innerHTML = city[0];
    document.getElementById('expectations').innerHTML = expectations[0];
    document.getElementById('skill').innerHTML = skill[0];
    document.getElementById('group').innerHTML = group[0];
  }
});
