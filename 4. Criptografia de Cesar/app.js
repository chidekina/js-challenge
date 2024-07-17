// A Criptografia de César é uma das técnicas de criptografia mais simples e antigas conhecidas, datando dos tempos do antigo Império Romano. É um tipo de criptografia por substituição, na qual cada letra do texto é substituída por outra letra que se apresenta no alfabeto abaixo dela um número fixo de vezes.

// Por exemplo, com um deslocamento (ou "shift") de 1, 'A' seria substituído por 'B', 'B' se tornaria 'C', 'Z' se tornaria 'A', e assim por diante. O número de posições que cada letra é deslocada é determinado pelo parâmetro de deslocamento fornecido.

// Implementação da Criptografia de César
// 1. Requisitos da Função

// A função deve receber dois argumentos: uma string para ser cifrada e um número representando o deslocamento.
// Deve retornar a string cifrada usando a criptografia de César.
// Deve preservar a capitalização das letras.
// Caracteres não alfabéticos não devem ser modificados.
// Se um argumento não for uma string ou o deslocamento não for um número, a função deve retornar uma mensagem de erro: "Função aceita apenas strings e números."
// 2. Processo de Cifragem

// Para cada caractere na string fornecida:
// Se o caractere é uma letra do alfabeto, determina-se seu índice no alfabeto.
// Aplica-se o deslocamento a esse índice.
// Se o índice resultante estiver fora dos limites do alfabeto, ajusta-se o índice para que ele caiba no intervalo válido.
// Substitui-se o caractere pela letra correspondente ao novo índice no alfabeto.
// 3. Exemplo - Com uma string "HELLO" e um deslocamento de 3, "H" seria substituído por "K", "E" seria substituído por "H", e assim por diante, resultando em "KHOOR".

// 4. Você vai precisar saber

// typeof
// if…else
// for
// String.indexOf()
// String.toUpperCase()
// String.toLowerCase()
// String.length
// isNaN()


// criptografiaCesar();

// Resultado: Função aceita apenas strings e números.

// criptografiaCesar("ABC", 1);

// Resultado: BCD

// criptografiaCesar("XYZ", 1);

// Resultado: YZA

// criptografiaCesar("Hello, World!", 5);

// Resultado: Mjqqt, Btwqi!

// criptografiaCesar("Testando 123", 3);

// Resultado: Whvwdqgr 123

// criptografiaCesar(123, "Testando");

// Resultado: Função aceita apenas strings e números.

// criptografiaCesar("Testando", "abc");

// Resultado: Função aceita apenas strings e números.

// criptografiaCesar({}, 5);

// Resultado: Função aceita apenas strings e números.

function criptografiaCesar(palavra, numeroDeCasas){
    if (typeof palavra != 'string'|| typeof numeroDeCasas != 'number'){
        return "Função aceita apenas strings e números."
    }
    array = palavra.split('');
    array = array.map(x => x.charCodeAt(0))
    array = array.map(function(x){
        if (97 <= x && x <= 122){
            y = x + numeroDeCasas
            if (y > 122){
                return String.fromCharCode(y - 50)
            }
            return String.fromCharCode(y)
        }
        else if(65 <= x && x <= 90){
            y = x + numeroDeCasas
            if (y > 90){
                return String.fromCharCode(y - 26)
            }
            return String.fromCharCode(y)
        }
        return String.fromCharCode(x)
    })
    array = array.join('')
    return array;
}