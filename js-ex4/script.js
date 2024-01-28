let min1 = 0, max1 = 10;
let min = Math.floor(Math.random() * (max1-min1 + 1)) + min1, max = Math.floor(Math.random() * (max1-min1 + 1)) + min1;
let numResp = Math.floor(Math.random() * (max-min + 1)) + min;
let userResp;
let tentativas = 3;

do {
  userResp = Number(window.prompt("Chute um número entre 0 e 10: "));
  
  if(userResp >= 0 && userResp <= 10) {
    if(userResp == numResp) {
      console.log("ACERTOU! O número gerado foi " + numResp);
      break;
    } else {
      tentativas--;
      console.log("ERROU! " + tentativas + " tentativas restantes.");
    }
  } else {
    console.log("\nPor favor, chute um número apenas entre 0 e 10.");
  }

  if(tentativas == 0) {
    console.log("\nGAME OVER! O número era " + numResp);
  }
} while(tentativas > 0);