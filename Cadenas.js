// Act 1 Cadenas


// Se añade la string y luego se une en una nueva variable
const quoteStart = 'Dont judge each day by the harvest you reap ';
const quoteEnd = 'but by the seeds that you plant.';
const finalQuote = quoteStart + quoteEnd;
// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);
    


// Act 2 Cadenas


const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Se usa saca el tamaño de la string en numeros, se almacena y luego se usa en un index
// para obtener la string seleccionada
const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, index + substring.length);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);

// Act 3 Cadenas

const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Solo se cambian los upper case a lower case y luego se reemplazan
const fixedQuote = quote.charAt(0).toUpperCase() + quote.slice(1).toLowerCase();
const replacedQuote = fixedQuote.replace('green eggs and ham', 'brussels sprouts');
const finalQuote = replacedQuote + '.';

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);

// Act 4 Cadenas

const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

const c = Math.sqrt(a * a + b * b); // Calculando la longitud de la hipotenusa utilizando el teorema de Pitágoras

const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${c}.`;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);

