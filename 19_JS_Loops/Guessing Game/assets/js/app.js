let forceQuit = false;
let level = 0;
while (level <1 || level >3 || !level) {
    level = parseInt(prompt("Escolha um nível de dificuldade:", "1-3"));
}

// TRANSFERIDO P/ DENTRO DO WHILE ANTERIOR
// while (!level) {
//     level = parseInt(prompt("Nível inválido!", "1-3"));
// }

if (level === 1) {
    maxNum = 10;
} else if (level === 2) {
    maxNum = 30;
} else {
    maxNum = 100;
}

secretNum = Math.floor(Math.random() * (maxNum + 1));

let guess = prompt(`Escolha um número entre 0 e ${maxNum}:`, `1 - ${maxNum}`);
let attempts = 1;

while (parseInt(guess) !== secretNum) {
 
    if (guess === "q") {
        forceQuit = true;
        break;
    }
    guess = parseInt(guess);
    attempts++;
    if (guess < secretNum) {
        if (secretNum - guess <= 3) {
            guess = prompt(`Uuuui! Quase! Maior um pouquinho!`);
        } else {
            guess = prompt(`Errou! Chutou baixo!.`);
        }
    } else
    if (guess > secretNum) {
        if (guess - secretNum <= 3) {
            guess = prompt(`Uuuui! Quase! Menor um pouquinho!`);
        } else {
            guess = prompt(`Errou! Alto demais!`);
        }
    }
}

if (forceQuit) {
    alert("Ok, quitter. C ya.")
} else{
    if (attempts === 1) {
        alert(`Acertôô, mizeraavi! De primeira, carai!`);
    } else {
        alert(`Acertôô, mizeraavi! Chutou ${attempts} vezes!`);
    }    
}