// Importando a classe Vertice do arquivo questao1.js
import Vertice from './questao1';

// Classe Triangulo
class Triangulo {
  // Construtor que inicializa os três vértices
  #vertice1;
  #vertice2;
  #vertice3;

  constructor(vertice1, vertice2, vertice3) {
    // Verifica se os vértices formam um triângulo
    const a = vertice1.distancia(vertice2);
    const b = vertice2.distancia(vertice3);
    const c = vertice3.distancia(vertice1);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Os vértices não formam um triângulo válido.");
    }

    this.#vertice1 = vertice1;
    this.#vertice2 = vertice2;
    this.#vertice3 = vertice3;
  }

  // Método equals para verificar se dois triângulos são iguais
  equals(triangulo) {
    return (
      this.#vertice1.equals(triangulo.#vertice1) &&
      this.#vertice2.equals(triangulo.#vertice2) &&
      this.#vertice3.equals(triangulo.#vertice3)
    );
  }

  // Getter para o perímetro do triângulo
  get perimetro() {
    const a = this.#vertice1.distancia(this.#vertice2);
    const b = this.#vertice2.distancia(this.#vertice3);
    const c = this.#vertice3.distancia(this.#vertice1);
    return a + b + c;
  }

  // Método para retornar o tipo do triângulo
  tipo() {
    const a = this.#vertice1.distancia(this.#vertice2);
    const b = this.#vertice2.distancia(this.#vertice3);
    const c = this.#vertice3.distancia(this.#vertice1);

    if (a === b && b === c) {
      return "Equilátero";
    } else if (a === b || b === c || a === c) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }

  // Método clone para clonar o triângulo
  clone() {
    return new Triangulo(this.#vertice1, this.#vertice2, this.#vertice3);
  }

  // Getter para a área do triângulo
  get area() {
    const a = this.#vertice1.distancia(this.#vertice2);
    const b = this.#vertice2.distancia(this.#vertice3);
    const c = this.#vertice3.distancia(this.#vertice1);
    const s = this.perimetro / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

// Função para criar um vértice com entrada do usuário
const prompt = require("prompt-sync")();

function criarVertice(numero) {
  const posicaoX = parseFloat(prompt(`Digite o valor de posicaoX para o vértice ${numero}: `));
  const posicaoY = parseFloat(prompt(`Digite o valor de posicaoY para o vértice ${numero}: `));
  return new Vertice(posicaoX, posicaoY);
}

// Função para criar e manipular triângulos
function criarTriangulo(numero) {
  console.log(`\nCriando o triângulo ${numero}:`);
  const vertice1 = criarVertice(1);
  const vertice2 = criarVertice(2);
  const vertice3 = criarVertice(3);

  try {
    return new Triangulo(vertice1, vertice2, vertice3);
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Criando e manipulando triângulos
const triangulo1 = criarTriangulo(1);
if (triangulo1) {
  console.log(`Perímetro do triângulo 1: ${triangulo1.perimetro}`);
  console.log(`Área do triângulo 1: ${triangulo1.area}`);
  console.log(`Tipo do triângulo 1: ${triangulo1.tipo()}`);
}

const triangulo2 = criarTriangulo(2);
if (triangulo2) {
  console.log(`Triângulo 1 é igual ao triângulo 2? ${triangulo1.equals(triangulo2)}`);
}

const triangulo3 = criarTriangulo(3);
if (triangulo3) {
  const cloneTriangulo3 = triangulo3.clone();
  console.log(`Clone do triângulo 3 criado.`);
  console.log(`Perímetro do clone: ${cloneTriangulo3.perimetro}`);
  console.log(`Área do clone: ${cloneTriangulo3.area}`);
  console.log(`Tipo do clone: ${cloneTriangulo3.tipo()}`);
}
