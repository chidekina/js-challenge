// Para esse desafio você vai precisar criar uma função capaz de receber como argumento um número inteiro positivo e retornar a soma de todos os números ímpares entre 1 e o argumento recebido.

// Links que podem ajudar
// for
// Remainder
// Addition assignment
// if…else
// Number.isInteger()
// Requisitos
// Criar uma função com o nome somarImpares
// A função deve ser capaz de somar todo os números ímpares entre 1 e o número recebido como argumento
// A mensagem de erro "Função aceita apenas números inteiros positivos" deve ser retornada quando:
// A função receber como argumentos tipos diferentes de string e number
// A função receber como argumento um valor negativo ou igual a 0
// A função receber como argumento um valor que não pode ser convertido para o tipo number
// A função receber como argumento um valor decimal

// somarImpares();

// Resultado: Função aceita apenas números inteiros positivos

// somarImpares(100);

// Resultado: 2500

// somarImpares(-50);

// Resultado: Função aceita apenas números inteiros positivos

// somarImpares(null);

// Resultado: Função aceita apenas números inteiros positivos

// somarImpares(2.75);

// Resultado: Função aceita apenas números inteiros positivos

// somarImpares(0);

// Resultado: Função aceita apenas números inteiros positivos

// somarImpares("10");

// Resultado: 25

// somarImpares("15 números");

// Resultado: Função aceita apenas números inteiros positivos

// somarImpares([]);

// Resultado: Função aceita apenas números inteiros positivos

// somarImpares({});

// Resultado: Função aceita apenas números inteiros positivos

function somarImpares(a){
    a = Number(a);
    let numerosImpares = 0;
    
    if (Number.isInteger(a) == false || a < 1){
            return "Função aceita apenas números inteiros positivos";
        }
        for (i = 2; i <= a; i++){
            if(i % 2 != 0){
                numerosImpares += i
            }
        }
        return numerosImpares + 1;
    }