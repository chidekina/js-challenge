// Neste desafio você vai receber um texto qualquer e precisará retornar o mesmo texto porém com todas as letras e maiúsculas

// Requisitos

// Criar uma função minusculoParaMaiusculo
// A função deve ser capaz de receber um texto como argumento e retornar o mesmo texto com todas as letras maiúsculas.
// A função deve retornar a mensagem de erro "Argumento inválido!" quando receber um argumento diferente de string
// Links que podem ajudar

// if…else
// typeof
// String.split
// Array.map
// String.charCodeAt
// String.fromCharCode
// Array.join
// Destructuring

// minusculoParaMaiusculo();

// Resultado: Argumento inválido!

// minusculoParaMaiusculo("katchau!");

// Resultado: KATCHAU!

// minusculoParaMaiusculo(123);

// Resultado: Argumento inválido!

// minusculoParaMaiusculo("Texto em letras maiúsculas");

// Resultado: TEXTO EM LETRAS MAIÚSCULAS

// minusculoParaMaiusculo(["Texto"]);

// Resultado: Argumento inválido!

// minusculoParaMaiusculo("CONTEÚDO DE TEXTO");

// Resultado: CONTEÚDO DE TEXTO

// minusculoParaMaiusculo({});

// Resultado: Argumento inválido!

// minusculoParaMaiusculo(false);

// Resultado: Argumento inválido!

// minusculoParaMaiusculo("0123456789");

// Resultado: 0123456789

// minusculoParaMaiusculo(true);

// Resultado: Argumento inválido!

function minusculoParaMaiusculo(palavra){
    if(typeof palavra != 'string'){
        return "Argumento inválido!"
    }
    palavra = palavra.split('');
    palavra = palavra.map(x => x.charCodeAt(0))
    palavra = palavra.map(function(x){
          if (97 <= x && x <= 122 || x == 250){
            return String.fromCharCode(x - 32)
          }
          return String.fromCharCode(x)
    })
    palavra = palavra.join('');
    return palavra;
}