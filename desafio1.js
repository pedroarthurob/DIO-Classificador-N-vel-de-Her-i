const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classifyHeroXP(name, xp) {
  let nivel;

  if (xp < 1000) {
    nivel = 'Ferro';
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = 'Bronze';
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = 'Prata';
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = 'Ouro';
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = 'Platina';
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = 'Ascendente';
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = 'Imortal';
  } else if (xp >= 10001) {
    nivel = 'Radiante';
  }

  console.log(`O Herói de nome ${name} está no nível de ${nivel}`);
  startHeroClassification(); // Chama novamente para continuar o ciclo
}

console.log('=== Classificador de nível de Herói ===');

function startHeroClassification() {
  rl.question('Digite o nome do herói (ou digite "sair" para encerrar): ', (name) => {
    if (name.toLowerCase() === 'sair') {
      rl.close();
      return;
    }

    rl.question('Digite a quantidade de XP do herói: ', (xpInput) => {
      const xp = parseInt(xpInput);

      if (isNaN(xp)) {
        console.log('Por favor, digite um valor numérico para XP.');
        startHeroClassification(); // Chama novamente para continuar o ciclo
      } else {
        classifyHeroXP(name, xp);
      }
    });
  });
}

startHeroClassification();
