/** @format */

let command = "";
let toDos = [];
while (command !== "quit" && command !== "q") {
    command = prompt("O que você quer fazer?");

    if (command === "new" || command === "n") {
        let task = prompt("Digite sua tarefa:");
        toDos.push(task);
        console.log(`"${task}" adicionado à lista.`);
    } else if (command === "list" || command === "l") {
        console.log("**********");
        if (toDos.length === 0) {
            console.log("Opa! Nada pra fazer!");
        }
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i + 1}: ${toDos[i]}`);
        }
        console.log("**********");
    } else if (command === "delete" || command === "del") {
        if (toDos.length !== 0) {
            let deletedIndex = parseInt(prompt("Digite o número da tarefa que vc quer excluir:") - 1);
            if (!isNaN(deletedIndex) && !(deletedIndex < 0) && !(deletedIndex >= toDos.length)) {
                let deletedTask = toDos[deletedIndex];
                toDos.splice(deletedIndex, 1);
                console.log(`Tarefa #${deletedIndex + 1} - ${deletedTask} foi removida!`);
            } else {
                console.log("Índice inválido, bonitão --");
            }
        } else {
            console.log("Naada pra fazer, nada pra deletar. :)")
        }
    }
}
console.log("Belê, té mais ;)");
