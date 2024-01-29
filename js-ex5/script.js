let frutas = new Array();
let vegetais = new Array();
let congelados = new Array();
let doces = new Array();
let op, resp;

do {
  op = Number(window.prompt("0 - SAIR\n1 - ADICIONAR PRODUTO NA LISTA DE COMPRAS\n2 - EXIBIR LISTA\n\nDigite a operação: "));
  
  switch(op) {
    case 0 :
      console.log("Finalizando...");
      break;
    case 1 :
      resp = window.prompt("Qual o tipo de produto você quer colocar? (frutas / vegetais / congelados / doces)");

      if(resp == "frutas") {
        frutas.push(window.prompt("Qual o produto? "));
      } else if(resp == "vegetais") {
        vegetais.push(window.prompt("Qual o produto? "));
      } else if(resp == "congelados") {
        congelados.push(window.prompt("Qual o produto? "));
      } else if(resp == "doces") {
        doces.push(window.prompt("Qual o produto? "));
      } else if(resp != "frutas" || resp != "vegetais" || resp != "congelados" || resp != "doces") {
        console.log("Informe um tipo de produto válido")
      }
      break;
    case 2 :
      resp = window.prompt("Qual a lista que você quer exibir? (frutas / vegetais / congelados / doces)");

      if(resp == "frutas") {
          for(let i = 0; i < frutas.length; i++) {
            console.log(frutas[i]);
          }
      } else if(resp == "vegetais") {
          for(let i = 0; i < vegetais.length; i++) {
            console.log(vegetais[i]);
          }
      } else if(resp == "congelados") {
          for(let i = 0; i < congelados.length; i++) {
            console.log(congelados[i]);
          }
      } else if(resp == "doces") {
          for(let i = 0; i < doces.length; i++) {
            console.log(doces[i]);
          }
      } else if(resp != "frutas" || resp != "vegetais" || resp != "congelados" || resp != "doces") {
        console.log("Informe um tipo de produto válido")
      }
      break;
  }
} while(op != 0);

console.log("Obrigado por utilizar o sistema");