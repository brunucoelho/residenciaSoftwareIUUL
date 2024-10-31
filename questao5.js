// Função para validar e formatar CPF
function validarCPF(cpf) {
    const regex = /^\d{11}$/;
    return regex.test(cpf);
  }
  
  // Função para validar nome
  function validarNome(nome) {
    return nome.length >= 5;
  }
  
  // Função para validar a idade
  function validarIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      return idade - 1;
    }
    return idade;
  }
  
  // Função para validar renda mensal
  function validarRenda(renda) {
    return renda >= 0;
  }
  
  // Função para validar estado civil
  function validarEstadoCivil(estadoCivil) {
    return /^[CSVD]$/i.test(estadoCivil);
  }
  
  // Função para validar dependentes
  function validarDependentes(dependentes) {
    return dependentes >= 0 && dependentes <= 10;
  }
  
  // Função para formatar CPF
  function formatarCPF(cpf) {
    return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9)}`;
  }
  
  // Função para formatar renda
  function formatarRenda(renda) {
    return renda.toFixed(2).replace('.', ',');
  }
  
  // Função para formatar data
  function formatarData(data) {
    const [dia, mes, ano] = data.split('/');
    return `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${ano}`;
  }
  
  // Função principal para coletar os dados do cliente
  function coletarDadosCliente() {
    const prompt = require("prompt-sync")();
  
    let nome;
    do {
      nome = prompt("Digite o nome (mínimo 5 caracteres): ");
      if (!validarNome(nome)) {
        console.log("Erro: O nome deve ter pelo menos 5 caracteres.");
      }
    } while (!validarNome(nome));
  
    let cpf;
    do {
      cpf = prompt("Digite o CPF (11 dígitos): ");
      if (!validarCPF(cpf)) {
        console.log("Erro: CPF deve conter exatamente 11 dígitos.");
      }
    } while (!validarCPF(cpf));
  
    let dataNascimento;
    let idade;
    do {
      dataNascimento = prompt("Digite a data de nascimento (DD/MM/AAAA): ");
      idade = validarIdade(dataNascimento);
      if (idade < 18) {
        console.log("Erro: O cliente deve ter pelo menos 18 anos.");
      }
    } while (idade < 18);
  
    let renda;
    do {
      renda = parseFloat(prompt("Digite a renda mensal (valor ≥ 0): ").replace(',', '.'));
      if (!validarRenda(renda)) {
        console.log("Erro: A renda mensal deve ser um valor positivo ou zero.");
      }
    } while (!validarRenda(renda));
  
    let estadoCivil;
    do {
      estadoCivil = prompt("Digite o estado civil (C, S, V ou D): ").toUpperCase();
      if (!validarEstadoCivil(estadoCivil)) {
        console.log("Erro: Estado civil deve ser C, S, V ou D.");
      }
    } while (!validarEstadoCivil(estadoCivil));
  
    let dependentes;
    do {
      dependentes = parseInt(prompt("Digite o número de dependentes (0 a 10): "), 10);
      if (!validarDependentes(dependentes)) {
        console.log("Erro: O número de dependentes deve ser entre 0 e 10.");
      }
    } while (!validarDependentes(dependentes));
  
    // Imprimindo os dados do cliente formatados
    console.log("\nDados do cliente:");
    console.log(`Nome: ${nome}`);
    console.log(`CPF: ${formatarCPF(cpf)}`);
    console.log(`Data de Nascimento: ${formatarData(dataNascimento)}`);
    console.log(`Renda Mensal: R$ ${formatarRenda(renda)}`);
    console.log(`Estado Civil: ${estadoCivil}`);
    console.log(`Dependentes: ${dependentes}`);
  }
  
  // Chamada da função principal
  coletarDadosCliente();
  