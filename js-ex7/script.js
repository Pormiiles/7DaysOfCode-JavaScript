let op, num1, num2;

function soma(num1, num2) {
  let soma = num1 + num2;

  console.log("\nResultado da soma: " + soma);
}

function subt(num1, num2) {
  let subtracao = num1 - num2;

  console.log("\nResultado da subtração: " + subtracao);
}

function multip(num1, num2) {
  let multiplicacao = num1 * num2;

  console.log("\nResultado da multiplicação: " + multiplicacao);
}

function div(num1, num2) {
  let divisao = num1 / num2;

  console.log("\nResultado da divisão: " + divisao);
}

do {
  op = Number(window.prompt("0 - SAIR\n1- ADIÇÃO\n2 - SUBTRAÇÃO\n3 - MULTIPLICAÇÃO\n4 - DIVISÃO\n\nInforme a operação: "));
  
  switch(op) {
    case 0 :
      console.log("Finalizando...");
      break;
    case 1 :
      num1 = Number(window.prompt("Informe um valor: "));
      num2 = Number(window.prompt("Informe outro valor: "));

      soma(num1, num2);
      break;
    case 2 :
      num1 = Number(window.prompt("Informe um valor: "));
      num2 = Number(window.prompt("Informe outro valor: "));

      subt(num1, num2);
      break;
    case 3 :
      num1 = Number(window.prompt("Informe um valor: "));
      num2 = Number(window.prompt("Informe outro valor: "));

      multip(num1, num2);
      break;
    case 4 :
      num1 = Number(window.prompt("Informe um valor: "));
      num2 = Number(window.prompt("Informe outro valor: "));

      div(num1, num2);
      break;
    default :
      alert("Operação inválida");
      break;
  }
} while(op != 0);

console.log("Obrigado por utilizar o sistema. Até mais!");