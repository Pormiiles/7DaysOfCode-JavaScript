function perguntas() {
  let x;
  
  let nome = window.prompt("Qual o seu nome?");
  let idade = window.prompt("Qual a sua idade");
  let linguagem = window.prompt("Qual linguagem você está aprendendo?");

  if(nome != null && idade != null && linguagem != null) {
    x = "Olá, " + nome + ". Você já tem " + idade + " anos e já está aprendendo " + linguagem + "!";
    document.getElementById('info').innerHTML = x;

    pergunta_extra(linguagem);
  } else {
    console.log("Campos não podem estar vazios.");
  }
}

function pergunta_extra(linguagem) {
  let x, y;

  x = window.prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO: ");

  if(x == 1 || x == 2) {
    if(x == 1) {
      y = "1 - Muito bom! Continue estudando " + linguagem + " e você terá muito sucesso.";
      document.getElementById('info2').innerHTML = y;
    } else {
      y = "2 - Ahh que pena... Já tentou aprender outras linguagens?";
      document.getElementById('info2').innerHTML = y;
    }
  } else {
    y = "Digite uma entrada válida (1 ou 2), por favor.";
    document.getElementById('info2').innerHTML = y;
  }
}