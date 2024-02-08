// '\n' quebra a linha de um print

const nomes = ["Pedro", "João", "Maria", "Márcia"] //Cria um Array com 4 nomes
console.log("Alunos: " + nomes) //Retorna frase + Array

if(nomes[1] == "João"){ //"Se o segundo item do Array for 'João', mudar para 'José'"
    nomes[1] = "José"
    console.log("Nomes atualizados: " + nomes + "\n") //Retorna frase + Array atualizado
}

console.log("Nomes em forma de lista: ")
for(var i = 0; i < nomes.length; i++){ //Cria um laço de repetição que retorna os nomes na Array
    console.log(nomes[i])
}

for(var i = 0; i < nomes.length; i++){ //Cria um laço de repetição 
    if(nomes[i] == "Pedro"){ //Valida se o nome "Pedro" está presente no Array
        console.log("\nO nome " + nomes[i] + " está na posição '" + [i] +"' do Array\n") //Retorna o local do nome
    }
}

const addNome = "Marcos" //Variável que adiciona um nome
const delNome = "Marcos"//Variável que deleta o último nome
const verNome = "Maria" //Variável que fará a validação do nome "Maria"

nomes.push(addNome) //Adiciona o nome da variável
nomes.pop(delNome) //Remove o último nome adicionado

console.log(nomes.includes(verNome)) //Retorna True, caso o nome esteja na Array. Se não existir, retorna False
console.log(nomes.indexOf(verNome) + "\n") //Retorna a posição do nome na Array. Se o nome não existir na Array, retorna '-1'

console.log("Nomes em ordem alfabética: ")
for(var i = 0; i<nomes.length;i++){
    console.log("- " + nomes.sort()[i] + ";") //Retorna os nomes em ordem alfabética
}
