const listaAlunos = [ //Obj aluno
    //Aluno
    {
        nome: "Jorge",
        idade: 19,
        materias: [ //Obj dentro do Obj aluno
            //Materia
            {
                nomeMateria: "TIA",
                totalHoras: 100,
                presenca: 75,
                nota: 10,
            },
            {
                nomeMateria: "PDM",
                totalHoras: 100,
                presenca: 50,
                nota: 5,
            },
        ]
    },
    //Aluno
    {
        nome: "Pedro",
        idade: 18,
        materias: [ //Obj dentro do Obj aluno
            //Materia    
            {
                nomeMateria: "TIA",
                totalHoras: 100,
                presenca: 20,
                nota: 10,
            },
            {
                nomeMateria: "PDM",
                totalHoras: 100,
                presenca: 80,
                nota: 8,
            },
        ]
    },
]

//Função para avaliar se o aluno passou de ano na materia:
//Precisa de > 75% de presença;
//Precisa ter nota > 6;
function avaliaAluno(materia){
   if(materia.nota >= 6 && materia.presenca >= 75){
    console.log("Aprovado!")
    return
   } 

   console.log("Reprovado em: " + materia.nomeMateria)
   console.log("Nota: " + materia.nota)
   console.log("Presença: " + materia.presenca)
}

function validaTurma(listaDeAluno) {
    // FOR/FOREACH que veja cada aluno
    for(let i=0; i < listaDeAluno.length; i++){
        console.log("Nome: " + listaDeAluno[i].nome)
        console.log("Idade: " + listaDeAluno[i].idade)

        for(let j=0; j < listaDeAluno[i].materias.length; j++){
            avaliaAluno(listaDeAluno[i].materias[j])
        }

        console.log("-----------------------------------------------")
    }
}

validaTurma(listaAlunos)