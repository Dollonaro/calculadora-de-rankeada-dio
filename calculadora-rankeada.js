const quantVitoria = parseInt(prompt());
const quantDerrota = parseInt(prompt());

function calculadoraRankeada (quantVitoria, quantDerrota){
  let saldoRankeada = quantVitoria - quantDerrota;
  let nivel
  if(saldoRankeada <= 10){
    nivel = "Ferro"
  }
  else if (saldoRankeada > 10 && saldoRankeada <=20){
    nivel = "Bronze"
  }
  else if (saldoRankeada > 20 && saldoRankeada <=50){
    nivel = "Prata"
  }
  else if (saldoRankeada > 50 && saldoRankeada <=80){
    nivel = "Ouro"
  }
  else if (saldoRankeada > 80 && saldoRankeada <=90){
    nivel = "Diamante"
  }
  else if (saldoRankeada > 90 && saldoRankeada <=100){
    nivel = "Lendário"
  }
  else{
    nivel = "Imortal"
  }

  console.log("O Herói tem de saldo de " + saldoRankeada + " e está no nível de " + nivel)
}

calculadoraRankeada(quantVitoria, quantDerrota)
