let command = "";
let toDos = [];
while (command !== "quit") {
    command = prompt("O que você quer fazer?");

    if (command === "new") {
        let task = prompt("Digite sua tarefa:");
        toDos.push(task);
        console.log(`"${task}" adicionado à lista.`)
    } else if (command === "list") {
        console.log("**********")
        if (toDos.length === 0) {
            console.log("Opa! Nada pra fazer!")
        }
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i + 1}: ${toDos[i]}`)
        }
        console.log("**********")
    } else if (command === "delete") {
        let toBeDeleted = parseInt(prompt("Digite o número da tarefa que vc quer excluir:"));
        let indexToBeDeleted = toBeDeleted - 1;
        console.log(`Tarefa #${toBeDeleted} - ${toDos[indexToBeDeleted]} foi removida!`)
        toDos.splice(indexToBeDeleted, 1);
    }
    
}