
import { create, enqueue, dequeue } from "./fila";
import { Paciente } from "./types";

let pacientesTriados: Paciente[] = [
  { nome: "Maria", prioridade: "urgente" },
  { nome: "José", prioridade: "comum" },
  { nome: "Ana", prioridade: "emergência" },
  { nome: "Pedro", prioridade: "urgente" },
  { nome: "Clara", prioridade: "comum" },
  { nome: "Bryan", prioridade: "emergência" },
  { nome: "Mariana", prioridade: "urgente" },
  { nome: "Peter", prioridade: "comum" },
  { nome: "Chris", prioridade: "comum" },
];

function main() {
  const sizeMain = 3
  const sizeElse = 5
  const filaPrinc = create(sizeMain)
  const filaTriagem = create(sizeElse)
  const filaComm = create(sizeElse)
  const filaUrge = create(sizeElse)
  const filaEmer = create(sizeElse)

  filaTriagem[2] = filaComm;
  filaTriagem[1] = filaUrge;
  filaTriagem[0] = filaEmer;

  switch (pacientesTriados) {
    case "emergência":
      return 0;

    case "urgente":
      return 1;

    case "comum":
      return 2;
      
    default:
      break;
  }

  for(let i = 0; i < sizeElse; i++){
  
  }
}