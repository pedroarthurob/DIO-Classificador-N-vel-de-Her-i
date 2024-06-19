const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNivelRankeadas(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  if (saldoVitorias < 10) {
    nivel = 'Ferro';
  } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = 'Bronze';
  } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = 'Prata';
  } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = 'Ouro';
  } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    nivel = 'Diamante';
  } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = 'Lendário';
  } else if (saldoVitorias > 100) {
    nivel = 'Imortal';
  }

  console.log(`O jogador tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);
  startRankingCalculation(); // Chama novamente para continuar o ciclo
}

console.log('=== Calculadora de Partidas Rankeadas ===');

function startRankingCalculation() {
  rl.question('Digite a quantidade de vitórias do jogador (ou digite "sair" para encerrar): ', (vitoriasInput) => {
    if (vitoriasInput.toLowerCase() === 'sair') {
      rl.close();
      return;
    }

    const vitorias = parseInt(vitoriasInput);

    rl.question('Digite a quantidade de derrotas do jogador: ', (derrotasInput) => {
      const derrotas = parseInt(derrotasInput);

      if (isNaN(vitorias) || isNaN(derrotas)) {
        console.log('Por favor, digite valores numéricos para vitórias e derrotas.');
        startRankingCalculation(); // Chama novamente para continuar o ciclo
        return;
      }

      calcularNivelRankeadas(vitorias, derrotas);
    });
  });
}

startRankingCalculation();
