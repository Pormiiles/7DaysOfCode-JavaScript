function perguntas() {
  let framework, linguagem, area, confirmacao = 0, count = 0, pg1, pg2 = new Array(count), resp_final;
  
  area = window.prompt("Qual área da programação você seguir? 1 - FrontEnd ou 2 - BackEnd");

  if(area == 1 || area == 2) {
    if(area == 1) {
      area = "Frontend";
      framework = window.prompt("Você quer aprender 1 - React ou 2 - Vue?");
      confirmacao++;
    } else {
      area = "Backend";
      linguagem = window.prompt("Você quer aprender 1 - C# ou 2 - Java?");
      confirmacao++;
    }
  } else {
    console.log("Digite uma entrada válida (1 ou 2).");
  }

  if(confirmacao == 1) {
    pg1 = window.prompt("Você quer: 1 - Seguir se especializando em " + area + " ou 2 - Quer se tornar Fullstack?");

    if(pg1 == 1 || pg1 == 2) {
      if(pg1 == 1) {
        console.log("Selecionado: Especialização em " + area);
        confirmacao++;
      } else {
        console.log("Selecionado: Carreira Fullstack");
        confirmacao++;
      }
    } else {
      console.log("Digite uma entrada válida (1 ou 2).");
    }
  } else {
    console.log("Pergunta indisponível.");
  }

  if(confirmacao == 2) {
    pg2[count] = window.prompt("Qual é a tecnologia que você gostaria de se especializar/conhecer?");

    if(pg2[count] != null) {
      do {
        resp_final = window.prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 0 para concluir.");
        count++;
        pg2[count] = resp_final;
      } while(Number(resp_final) != 0);

      console.log("Que legal! Essas são todas as tecnologias que você gostaria de aprender: ");
      for(let i = 0; i < pg2.length; i++) {
        if(i < (pg2.length - 1))
          console.log(pg2[i]);
        else 
          break;
      }
    } else {
      console.log("O campo não pode ser nulo.");
    } 
  } 
}