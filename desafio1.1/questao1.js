// Classe Vertice
class Vertice {
    // Campos privados para posicaoX e posicaoY
    #posicaoX;
    #posicaoY;
  
    // Construtor para inicializar os valores de posicaoX e posicaoY
    constructor(posicaoX, posicaoY) {
      this.#posicaoX = posicaoX;
      this.#posicaoY = posicaoY;
    }
  
    // Getter para o valor de posicaoX
    get posicaoX() {
      return this.#posicaoX;
    }
  
    // Getter para o valor de posicaoY
    get posicaoY() {
      return this.#posicaoY;
    }
  
    // Método para calcular a distância euclidiana até outro vértice
    distancia(vertice) {
      const dposicaoX = this.posicaoX - vertice.posicaoX;
      const dposicaoY = this.posicaoY - vertice.posicaoY;
      return Math.sqrt(dposicaoX * dposicaoX + dposicaoY * dposicaoY);
    }
  
    // Método para mover o vértice para outra posição (posicaoX, posicaoY)
    move(novoposicaoX, novoposicaoY) {
      this.#posicaoX = novoposicaoX;
      this.#posicaoY = novoposicaoY;
    }
  
    // Método para verificar se dois vértices são iguais
    equals(vertice) {
      return this.posicaoX === vertice.posicaoX && this.posicaoY === vertice.posicaoY;
    }
  }
  
  // Função principal para criar e manipular vértices
  const prompt = require("prompt-sposicaoYnc")(); // Biblioteca para leitura do console
  
  // Função para criar um vértice com entrada do usuário
  function criarVertice(numero) {
    const posicaoX = parseFloat(prompt(`Digite o valor de posicaoX para o vértice ${numero}: `));
    const posicaoY = parseFloat(prompt(`Digite o valor de posicaoY para o vértice ${numero}: `));
    return new Vertice(posicaoX, posicaoY);
  }
  
  // Criando 3 vértices
  const vertice1 = criarVertice(1);
  const vertice2 = criarVertice(2);
  const vertice3 = criarVertice(3);
  
  // Chamando métodos da classe
  console.log(`Distância entre vértice 1 e vértice 2: ${vertice1.distancia(vertice2)}`);
  console.log(`Vértice 1 é igual ao vértice 2? ${vertice1.equals(vertice2)}`);
  
  // Movendo o vértice 3 para uma nova posição
  const novoposicaoX = parseFloat(prompt("Digite o novo valor de posicaoX para mover o vértice 3: "));
  const novoposicaoY = parseFloat(prompt("Digite o novo valor de posicaoY para mover o vértice 3: "));
  vertice3.move(novoposicaoX, novoposicaoY);
  
  console.log(`Nova posição do vértice 3: (${vertice3.posicaoX}, ${vertice3.posicaoY})`);
  