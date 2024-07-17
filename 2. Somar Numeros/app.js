// Neste desafio você vai criar uma função capaz de receber dois argumentos e retornar a soma entre eles. Também vai precisar fazer validações para garantir que está somando parâmetros do tipo numérico.

// Links que pode ajudar

// Number
// Number.isNaN()
// if…else
// Requisitos

// Criar uma função com o nome somarNumeros
// Quando a função for executada com dois argumentos do tipo numérico, deve ser retornado a soma entre os argumentos
// A função deve ser capaz de fazer soma entre números positivos, negativos, inteiros e decimais
// A função deve ser capaz de fazer soma entre números que chegam como string e garantir que vai retornar um número e não uma string concatenada
// Quando um dos parâmetros não for um número, a função deve retornar a mensagem: "Função aceita apenas números."

// somarNumeros({}, []);

// Resultado: Função aceita apenas números ou valores que podem ser convertidos em números.

// somarNumeros([], {});

// Resultado: Função aceita apenas números ou valores que podem ser convertidos em números.

// somarNumeros("a", "b");

// Resultado: Função aceita apenas números ou valores que podem ser convertidos em números.

// somarNumeros(1, []);

// Resultado: Função aceita apenas números ou valores que podem ser convertidos em números.

// somarNumeros({}, 10);

// Resultado: Função aceita apenas números ou valores que podem ser convertidos em números.

function somarNumeros (a,b){
    if (typeof a != 'number' && typeof a != 'string' && typeof a != 'boolean'){
        return 'Função aceita apenas números ou valores que podem ser convertidos em números.';
        }
    else if (typeof b != 'number' && typeof b != 'string' && typeof b != 'boolean'){
         return 'Função aceita apenas números ou valores que podem ser convertidos em números.';
    
    }
    a = Number(a);
    b = Number(b);
    
    
    if (Number.isNaN(a) == true || Number.isNaN(b) == true){
            return 'Função aceita apenas números ou valores que podem ser convertidos em números.';
        }
        
    else if (a == null || b == null){
        return 'Função aceita apenas números ou valores que podem ser convertidos em números.';
    }
        return a + b;
    }