// Importando a classe Vertice do arquivo questao1.js
const Vertice = require('./questao1.js');

// Classe Poligono
class Poligono {
  #vertices;

  // Construtor que inicializa os vértices
  constructor(...vertices) {
    if (vertices.length < 3) {
      throw new Error("Um polígono deve ter pelo menos 3 vértices.");
    }
    this.#vertices = [];
    vertices.forEach(vertice => this.addVertice(vertice));
  }

  // Método para adicionar um vértice ao polígono
  addVertice(vertice) {
    // Verifica se o vértice já existe
    for (let v of this.#vertices) {
      if (v.equals(vertice)) {
        return false; // Vértice já existe
      }
    }
    this.#vertices.push(vertice);
    return true; // Vértice adicionado com sucesso
  }

  // Getter para o perímetro do polígono
  get perimetro() {
    let total = 0;
    for (let i = 0; i < this.#vertices.length; i++) {
      const proximo = (i + 1) % this.#vertices.length; // Cicla de volta ao primeiro vértice
      total += this.#vertices[i].distancia(this.#vertices[proximo]);
    }
    return total;
  }

  // Getter para a quantidade de vértices do polígono
  get qtdVertices() {
    return this.#vertices.length;
  }
}

// Função para criar um vértice com entrada do usuário
const prompt = require("prompt-sync")();

function criarVertice(numero) {
  const posicaoX = parseFloat(prompt(`Digite o valor de posicaoX para o vértice ${numero}: `));
  const posicaoY = parseFloat(prompt(`Digite o valor de posicaoY para o vértice ${numero}: `));
  return new Vertice(posicaoX, posicaoY);
}

// Função para criar e manipular um polígono
function criarPoligono() {
  const vertices = [];
  const qtdVertices = parseInt(prompt("Quantos vértices você deseja para o polígono (mínimo 3)? "), 10);

  if (qtdVertices < 3) {
    console.log("Um polígono deve ter pelo menos 3 vértices.");
    return null;
  }

  for (let i = 1; i <= qtdVertices; i++) {
    const vertice = criarVertice(i);
    vertices.push(vertice);
  }

  try {
    return new Poligono(...vertices);
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Criando e manipulando um polígono
const poligono = criarPoligono();
if (poligono) {
  console.log(`Número de vértices no polígono: ${poligono.qtdVertices}`);
  console.log(`Perímetro do polígono: ${poligono.perimetro}`);
}
