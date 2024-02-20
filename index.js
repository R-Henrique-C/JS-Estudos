import { iniciarPilha, inserirPilha } from "./pilha.js"; //Importa a função pilha

const pilha = iniciarPilha() //Cria uma variavel com a função pilha de tamanho variavel
console.log(pilha)
inserirPilha(pilha, 'Haroldo')
console.log(pilha)
