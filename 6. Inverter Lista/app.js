// Invertendo lista.

// Para esse desafio você vai precisar criar uma função que seja capaz de receber um array como argumento e retorna esse mesmo array porém na ordem inversa. Para os casos em que sua função receber um argumento diferente de array, deverá ser retornada uma mensagem de erro.

// Requisitos

// Criar uma função inverterLista
// Sua função deve ser capaz de receber pelo menos um argumento
// Quando a função receber como argumento um array, deverá retornar os mesmo array recebido porém na ordem invertida
// Quando a função receber qualquer outro argumento diferente de um array, deverá retornar a frase "Função aceita apenas array como argumento."
// Links que podem ajudar

// O que é um array?
// for
// Array.isArray

// inverterLista();

// Resultado: Função aceita apenas array como argumento.

// inverterLista(["HTML","CSS","JS","ReactJS"]);

// Resultado: ["ReactJS","JS","CSS","HTML"]

// inverterLista("array list");

// Resultado: Função aceita apenas array como argumento.

// inverterLista([{"type":"Frontend"},{"type":"Backend"}]);

// Resultado: [{"type":"Backend"},{"type":"Frontend"}]

// inverterLista({});

// Resultado: Função aceita apenas array como argumento.

// inverterLista([]);

// Resultado: []

// inverterLista(10);

// Resultado: Função aceita apenas array como argumento.

function inverterLista(array){
    arrayInvertida = []
    if (Array.isArray(array) == false){
        return "Função aceita apenas array como argumento.";
    }
    for( i = 0; i < array.length; i++){
        arrayInvertida[i] = array[(array.length - 1) - i]
    }
    return arrayInvertida
    }