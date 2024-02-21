let forceQuit = false;
let level = 0;
while (level < 1 || level > 5 || !level) {
    level = parseInt(prompt("Escolha um nível de dificuldade.\nDigite um número de 1 a 5:"));
}
level = parseInt(level); 
// TRANSFERIDO P/ DENTRO DO WHILE ANTERIOR
// while (!level) {
//     level = parseInt(prompt("Nível inválido!", "1-3"));
// }

if (level % 2 === 0) {
    maxNum = (10 ** level) / 2;
} else {
    maxNum = 10 ** level;
}

secretNum = Math.floor(Math.random() * (maxNum + 1));

let guess = prompt(`Escolha um número entre 0 e ${maxNum}:\ndigite 'q' para sair.`);
let attempts = 1;

while (parseInt(guess) !== secretNum) {

    if (guess === "q") {
        forceQuit = true;
        break;
    }
    guess = parseInt(guess);

    if (guess < 0 || guess > maxNum) {
        guess = prompt(`Aloow! Entre 0 e ${maxNum}!\nVou contar essa tentativa pra tu ficar esperto!\ndigite 'q' para sair.`);
        attempts++;
    } else if (guess < secretNum) {
        if (secretNum - guess <= 3) {
            guess = prompt(`Uuuui! Quase! Maior um pouquinho!\ndigite 'q' para sair.`);
            attempts++;
        } else {
            guess = prompt(`Errou! Chutou baixo!.\ndigite 'q' para sair.`);
            attempts++;
        }
    } else if (guess > secretNum) {
        if (guess - secretNum <= 3) {
            guess = prompt(`Uuuui! Quase! Menor um pouquinho!\ndigite 'q' para sair.`);
            attempts++;
        } else {
            guess = prompt(`Errou! Alto demais!\ndigite 'q' para sair.`);
            attempts++;
        }
    } else {
        guess = prompt(`Tem que ser um número né?!Essa vou deixar passar\ndigite 'q' para sair.`);
    }
}

if (forceQuit) {
    alert("Ok, quitter. C ya.")
} else {
    if (attempts === 1) {
        alert(`Acertôô, mizeraavi! De primeira, carai!`);
    } else {
        alert(`Acertôô, mizeraavi! Chutou ${attempts} vezes!`);
    }
}