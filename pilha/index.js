import { iniciarFila, inserirFila, retirarItem } from "./fila.js";

const nomes = [
    "Pedro",
    "João",
    "Marcos",
    "Sandra",
    "Daniela",
]

function printFila(){ // Function para printar as filas de uma forma mais bonita
    console.log(fila)
    console.log("-------------------------------------")
}

const tamanhoFila = 5 // Variavel que dita o tamanho da fila (Default = 10)
const fila = iniciarFila(tamanhoFila) // Cria uma variavel que inicia a fila e dita seu tamanho

console.log("Cria a fila:")
printFila()

for(let i = 0; i < nomes.length; i++){ // Adiciona elemento por elemento na fila
    inserirFila(fila, nomes[i])
}

console.log("Adiciona os nomes à fila:\n")
printFila()

retirarItem(fila) // Remove o primeiro elemento da fila

console.log("Remove o primeiro elemento da fila:\n")
printFila()

inserirFila(fila, "Carlos") // Adiciona um elemento no final da fila

console.log("Adiciona um elemento no final da fila:\n")
console.log(fila)