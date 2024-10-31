// Classe Aluno
class Aluno {
    constructor(matricula, nome) {
      this.matricula = matricula;
      this.nome = nome;
      this.p1 = null; // Nota P1
      this.p2 = null; // Nota P2
    }
  
    // Método para lançar a nota de P1 ou P2
    lancarNota(prova, nota) {
      if (prova === 'P1') {
        this.p1 = nota;
      } else if (prova === 'P2') {
        this.p2 = nota;
      }
    }
  
    // Método para calcular a nota final
    calcularNF() {
      if (this.p1 !== null && this.p2 !== null) {
        return (this.p1 + this.p2) / 2;
      } else if (this.p1 !== null) {
        return this.p1 / 2;
      } else if (this.p2 !== null) {
        return this.p2 / 2;
      }
      return 0; // Faltou a ambas
    }
  }
  
  // Classe Turma
  class Turma {
    constructor() {
      this.alunos = []; // Lista de alunos
    }
  
    // Método para inserir um aluno
    inserirAluno(matricula, nome) {
      if (this.alunos.some(aluno => aluno.matricula === matricula)) {
        console.log("Aluno com essa matrícula já existe.");
        return false;
      }
      this.alunos.push(new Aluno(matricula, nome));
      return true;
    }
  
    // Método para remover um aluno
    removerAluno(matricula) {
      const index = this.alunos.findIndex(aluno => aluno.matricula === matricula);
      if (index !== -1) {
        this.alunos.splice(index, 1);
        return true;
      }
      console.log("Aluno não encontrado.");
      return false;
    }
  
    // Método para imprimir a lista de alunos em ordem alfabética
    imprimirAlunos() {
      console.log("-------------------------------------------------");
      console.log("Matricula    |   Nome   |     P1    |    P2    |    NF ");
      console.log("-------------------------------------------------");
  
      // Ordena os alunos por nome
      this.alunos.sort((a, b) => a.nome.localeCompare(b.nome));
  
      this.alunos.forEach(aluno => {
        const nf = aluno.calcularNF().toFixed(1); // Nota final com 1 casa decimal
        console.log(`${aluno.matricula.padEnd(12)} | ${aluno.nome.padEnd(10)} | ${aluno.p1 !== null ? aluno.p1.toFixed(1) : '-'.padEnd(6)} | ${aluno.p2 !== null ? aluno.p2.toFixed(1) : '-'.padEnd(6)} | ${nf}`);
      });
  
      console.log("-------------------------------------------------");
    }
  }
  
  // Função principal para interação com o usuário
  const prompt = require("prompt-sync")();
  
  // Criando uma nova turma
  const turma = new Turma();
  
  // Lendo dados dos alunos
  while (true) {
    const matricula = prompt("Digite a matrícula do aluno (ou 'sair' para finalizar): ");
    if (matricula.toLowerCase() === 'sair') break;
  
    const nome = prompt("Digite o nome do aluno: ");
    turma.inserirAluno(matricula, nome);
  }
  
  // Lançando notas para os alunos
  while (true) {
    const matricula = prompt("Digite a matrícula do aluno para lançar nota (ou 'sair' para finalizar): ");
    if (matricula.toLowerCase() === 'sair') break;
  
    const prova = prompt("Digite a prova (P1 ou P2): ");
    const nota = parseFloat(prompt("Digite a nota: "));
    
    const aluno = turma.alunos.find(aluno => aluno.matricula === matricula);
    if (aluno) {
      aluno.lancarNota(prova.toUpperCase(), nota);
    } else {
      console.log("Aluno não encontrado.");
    }
  }
  
  // Imprimindo a lista de alunos
  turma.imprimirAlunos();
  