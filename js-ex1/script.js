let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if(numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não possuem o mesmo valor');
}

if(numeroTrinta === Number(stringTrinta)) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e o mesmo tipo');
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não possuem o mesmo tipo');
}

if(numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroDez e stringDez não possuem o mesmo valor');
}

// caso fosse utilizado o ===, seria feita uma comparação de equivalência entre as variáveis ("é identico"), sendo assim, comparando o VALOR e o TIPO das variaveis.