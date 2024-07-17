// Um template geralmente é uma estrutura de texto padrão com espaços reservados por meio de identificadores para adicionar a informação real. Por exemplo, um template de email sempre terá a mesma estrutura e o que muda é o nome do usuário que recebe esse email.

// Exemplo <h1>Bem vindo :fulano:<h1>

// Resultado esperado <h1>Bem vindo João<h1>

// Em algum momento no código, antes desse email ser enviado foi identificado no banco o usuário de nome João essa informação foi passada para função responsável por adicionar os dados ao template e substituir os identificadores pelo valor real.

// Neste desafio você vai precisar criar uma função que receber como primeiro argumento uma string e como segundo argumento um template html simples que contém um identificador que precisa ser substituído pelo valor do primeiro argumento.

// Requisitos

// Criar uma função template
// Sua função deve ser capaz de receber dois argumentos, um objeto e uma string
// A função dev substituir todos os identificadores encontrados dentro do objeto
// Links que podem ajudar

// String.replace
// String.replaceAll
// for…in

// template({"fulano":"Dev"}, "Bem vindo :fulano:!");

// Resultado: Bem vindo Dev!

// template({"username":"Dev"}, "Olá :username:, vamos iniciar a sua jornada?");

// Resultado: Olá Dev, vamos iniciar a sua jornada?

// template({"username":"Dev","order":123}, "Parabéns :username:, seu pedido #:order: foi finalizado com sucesso!");

// Resultado: Parabéns Dev, seu pedido #123 foi finalizado com sucesso!

function template (obj, string){

    for (prop in obj){
      string = string.replace(prop,obj[prop]);
    }
    string = string.replaceAll(':', '')
    return string;
  }