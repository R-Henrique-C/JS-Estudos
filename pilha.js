export function iniciarPilha(tamanhoPilha = 10) { //Exporta e cria uma função ao index
    console.log('Pilha iniciada com sucesso');
    
    return [... new Array(tamanhoPilha)] //Cria uma array de 10 elementos vazios
}

export function inserirPilha(pilha, elemento) {
    if(pilha.indexOf(undefined) !== -1){ //Se houver espaço na Array, insira 
        console.log('Inserindo na pilha')
        pilha[pilha.indexOf(undefined)] = elemento //Insere o elemento na Array
    }
}