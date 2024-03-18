// Act 1 variables

// Se añaden las variables
myName = "Mario";
myAge = 19;
// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);
    
// Act 2 variables


// Se añade la variable con la palabra let para que deje cambiar su valor
letmyName = "Mario"
myName = 'Paul';

// Don't edit the code below here!

section.innerHTML = ' ';
const para = document.createElement('p');
para.textContent = myName;
section.appendChild(para);


// Act 3 variables


// Se usa la misma palabra pero tambien con la variable myAge

let myName = 'Default';
myName = 'Chris';

let myAge = 42;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);


