export function iniciarFila(tamanhoPilha = 10) { //Exporta e cria uma função ao index
    console.log('fila iniciada com sucesso!');
    console.log("\n-------------------------------------")
    return [... new Array(tamanhoPilha)] //Cria uma array de 10 elementos vazios
}

export function inserirFila(pilha, elemento) {
    if(pilha.indexOf(undefined) !== -1){ //Se houver espaço na Array, insira 
        pilha[pilha.indexOf(undefined)] = elemento //Insere o elemento na Array
    }
}

 export function retirarItem(fila){
    if(fila[0] === undefined){ // Verifica se há algum elemento na fila
        return
    }

    for(let i = 0; i < fila.length; i++){
        fila[i] = fila[i + 1] // Sobrescreve um elemento por seu elemento seguinte
    }
}