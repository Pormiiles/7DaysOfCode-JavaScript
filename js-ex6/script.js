let frutas = new Array();
let vegetais = new Array();
let congelados = new Array();
let doces = new Array();
let op, resp, remove;

do {
  op = Number(window.prompt("0 - SAIR\n1 - ADICIONAR PRODUTO NA LISTA DE COMPRAS\n2 - EXIBIR LISTA\n3 - REMOVER ITENS DA LISTA\n\nDigite a operação: "));

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
          if(frutas.length === 0) {
            alert("A lista 'frutas' está vazia");
          } else {
            for(let i = 0; i < frutas.length; i++) {
              console.log(frutas[i]);
            }
          }
      } else if(resp == "vegetais") {
          if(vegetais.length === 0) {
            alert("A lista 'vegetais' está vazia");
          } else {
            for(let i = 0; i < vegetais.length; i++) {
              console.log(vegetais[i]);
            }
          }
      } else if(resp == "congelados") {
          if(congelados.length === 0) {
            alert("A lista 'congelados' está vazia");
          } else {
            for(let i = 0; i < congelados.length; i++) {
              console.log(congelados[i]);
            }
          }
      } else if(resp == "doces") {
          if(doces.length === 0) {
            alert("A lista 'doces' está vazia");
          } else {
            for(let i = 0; i < doces.length; i++) {
              console.log(doces[i]);
            }
          }
      } else if(resp != "frutas" || resp != "vegetais" || resp != "congelados" || resp != "doces") {
        console.log("Informe uma lista válida")
      }
      break;
    case 3 :
      resp = window.prompt("De qual lista você quer remover itens? (frutas / vegetais / congelados / doces)");

      if(resp == "frutas") {
        if(frutas.length === 0) {
          alert("Não é possível remover de uma lista vazia.");
        } else {
          for(let i = 0; i < frutas.length; i++) {
            console.log(frutas[i]);
          }
          
          remove = Number(window.prompt("Qual a posição do item que você quer remover?"));
          
          frutas.splice(remove);
          console.log("Item removido");
        }
      } else if(resp == "vegetais") {
        if(vegetais.length === 0) {
          alert("Não é possível remover de uma lista vazia.");
        } else {
          for(let i = 0; i < vegetais.length; i++) {
            console.log(vegetais[i]);
          }

          remove = Number(window.prompt("Qual a posição do item que você quer remover?"));

          vegetais.splice(remove);
          console.log("Item removido");
        }
      } else if(resp == "congelados") {
        if(congelados.length === 0) {
          alert("Não é possível remover de uma lista vazia.");
        } else {
          for(let i = 0; i < congelados.length; i++) {
            console.log(congelados[i]);
          }

          remove = Number(window.prompt("Qual a posição do item que você quer remover?"));

          congelados.splice(remove);
          console.log("Item removido");
        }
      } else if(resp == "doces") {
        if(doces.length === 0) {
          alert("Não é possível remover de uma lista vazia.");
        } else {
          for(let i = 0; i < doces.length; i++) {
            console.log(doces[i]);
          }

          remove = Number(window.prompt("Qual a posição do item que você quer remover?"));

          doces.splice(remove);
          console.log("Item removido");
        }
      } else if(resp != "frutas" || resp != "vegetais" || resp != "congelados" || resp != "doces") {
        console.log("Informe uma lista válida");
      break;
    }

    default :
      alert("Operação inválida");
      break;
  }
} while(op != 0);

console.log("Obrigado por utilizar o sistema");