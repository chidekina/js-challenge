// Neste desafio você vai receber um texto qualquer e precisará retornar o mesmo texto em letras minúsculas mas com a primeira letra de cada palavra maiúscula.

// Requisitos

// Criar uma função primeiraLetraMaiuscula
// A função deve ser capaz de receber um texto como argumento e retornar o mesmo texto com todas as letras minusculas a primera letra de cada palavra em maipusculo
// A função deve retornar a mensagem de erro "Argumento inválido!" quando receber um argumento diferente de string
// Links que podem ajudar

// if…else
// typeof
// String.split
// Array.map
// Array.join
// Array.slice

// primeiraLetraMaiuscula();

// Resultado: Argumento inválido!

// primeiraLetraMaiuscula("Katchau!");

// Resultado: Katchau!

// primeiraLetraMaiuscula(123);

// Resultado: Argumento inválido!

// primeiraLetraMaiuscula("texto em letras maiúsculas");

// Resultado: Texto Em Letras Maiúsculas

// primeiraLetraMaiuscula(["Texto"]);

// Resultado: Argumento inválido!

// primeiraLetraMaiuscula("cONTEÚDO de tEXTO");

// Resultado: Conteúdo De Texto

// primeiraLetraMaiuscula({});

// Resultado: Argumento inválido!

// primeiraLetraMaiuscula(false);

// Resultado: Argumento inválido!

// primeiraLetraMaiuscula("0123456789");

// Resultado: 0123456789

// primeiraLetraMaiuscula(true);

// Resultado: Argumento inválido!

function primeiraLetraMaiuscula(texto){
    textoEmArray = []
    if(typeof texto != 'string'){
        return "Argumento inválido!"
    }
    textoEmArray = texto.split(' ')
    textoEmArray = textoEmArray.map(function(x){
        primeiraLetra = x.slice(0,1);
        palavra = x.slice(1, x.length);
        palavra = palavra.toLowerCase();
        primeiraLetra = primeiraLetra.toUpperCase();
        return primeiraLetra + palavra;
    })
    textoEmArray = textoEmArray.join(' ')
    return textoEmArray
}