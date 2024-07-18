# JS Challenges - 

O [JS Challenge](https://kelvysmoura.github.io/js-logic/challenges/) tem como intuito solucionar questões de lógicas práticas dividida em 11 desafios variados.

![Captura de tela 2024-07-17 221807](https://github.com/user-attachments/assets/06b0196b-4665-4c98-aff1-0e7e204ea2be)

## **1. [Hello World](https://kelvysmoura.github.io/js-logic/#helloWorld)** ##

Desafio incial para entender a dinâmica do jogo.

**Requisitos**

+ Criar uma função com o nome helloWorld
+ Quando função não receber nenhum argumento deve retornar a frase "Hello World!"
+ Quando a função receber um argumento deve retornar uma frase iniciando com a palavra "Hello" e terminando com o argumento recebido mais um sinal de exclamação.
+ Nos casos em que o argumento passado não for do tipo texto, a função deve retornar a frase "Função aceita apenas string como argumento!"
+ A função deve retorna uma string com a frase "Hello World!"


### 🔶 **helloWorld();** ###

🔹 **Resultado:** Hello World!

### 🔶 **helloWorld("Dev");** ###

🔹 **Resultado:** Hello Dev!

### 🔶 **helloWorld(10);** ###

🔹 **Resultado:** Função aceita apenas string como argumento!

### 🔶 **helloWorld([]);** ###

🔹 **Resultado:** Função aceita apenas string como argumento!

### 🔶 **helloWorld({});** ###

🔹 **Resultado:** Função aceita apenas string como argumento!

### 🔶 **helloWorld(null);** ###

🔹 **Resultado:** Função aceita apenas string como argumento!

### 🔶 **helloWorld(true);** ###

🔹 **Resultado:** Função aceita apenas string como argumento!

### 🔶 **helloWorld(false);** ###

🔹 **Resultado:** Função aceita apenas string como argumento!


## **2. [Somar números](https://kelvysmoura.github.io/js-logic/#somarNumeros)** ##

Neste desafio você vai criar uma função capaz de receber dois argumentos e retornar a soma entre eles. Também vai precisar fazer validações para garantir que está somando parâmetros do tipo numérico.

**Requisitos**

+ Criar uma função com o nome somarNumeros
+ Quando a função for executada com dois argumentos do tipo numérico, deve ser retornado a soma entre os argumentos
+ A função deve ser capaz de fazer soma entre números positivos, negativos, inteiros e decimais
+ A função deve ser capaz de fazer soma entre números que chegam como string e garantir que vai retornar um número e não uma string concatenada
+ Quando um dos parâmetros não for um número, a função deve retornar a mensagem: "Função aceita apenas números."


### 🔶 **somarNumeros();** ###

🔹 **Resultado:** Função aceita apenas números ou valores que podem ser convertidos em números.

### 🔶 **somarNumeros(10, 10);** ###

🔹 **Resultado:** 20

### 🔶 **somarNumeros(-10, 5);** ###

🔹 **Resultado:** -5

### 🔶 **somarNumeros(5.7, 6);** ###

🔹 **Resultado:** 11.7

### 🔶 **somarNumeros("50", 45);** ###

🔹 **Resultado:** 95

### 🔶 **somarNumeros("texto com numero 2");** ###

🔹 **Resultado:** Função aceita apenas números ou valores que podem ser convertidos em números.

### 🔶 **somarNumeros(true, false);** ###

🔹 **Resultado:** 1

### 🔶 **somarNumeros(0, 0);** ###

🔹 **Resultado:** 0


## **3. [Somar ímpares](https://kelvysmoura.github.io/js-logic/#somarImpares)** ##

Para esse desafio você vai precisar criar uma função capaz de receber como argumento um número inteiro positivo e retornar a soma de todos os números ímpares entre 1 e o argumento recebido.

**Requisitos**

+ Criar uma função com o nome somarImpares
+ A função deve ser capaz de somar todo os números ímpares entre 1 e o número recebido como argumento
+ A mensagem de erro "Função aceita apenas números inteiros positivos" deve ser retornada quando:
+ A função receber como argumentos tipos diferentes de string e number
+ A função receber como argumento um valor negativo ou igual a 0
+ A função receber como argumento um valor que não pode ser convertido para o tipo number
+ A função receber como argumento um valor decimal

### 🔶 **somarImpares();** ###

🔹 **Resultado:** Função aceita apenas números inteiros positivos

### 🔶 **somarImpares(100);** ###

🔹 **Resultado:** 2500

### 🔶 **somarImpares(-50);** ###

🔹 **Resultado:** Função aceita apenas números inteiros positivos

### 🔶 **somarImpares(null);** ###

🔹 **Resultado:** Função aceita apenas números inteiros positivos

### 🔶 **somarImpares(2.75);** ###

🔹 **Resultado:** Função aceita apenas números inteiros positivos

### 🔶 **somarImpares(0);** ###

🔹 **Resultado:** Função aceita apenas números inteiros positivos

### 🔶 **somarImpares("10");** ###

🔹 **Resultado:** 25

### 🔶 **somarImpares("15 números");** ###

🔹 **Resultado:** Função aceita apenas números inteiros positivos

### 🔶 **somarImpares([]);** ###

🔹 **Resultado:** Função aceita apenas números inteiros positivos

### 🔶 **somarImpares({});** ###

🔹 **Resultado:** Função aceita apenas números inteiros positivos


## **4. [Criptografia de César](https://kelvysmoura.github.io/js-logic/#criptografiaCesar)** ##
_Para este desafio, foi utilizado a [Tabela ASCII](https://www.matematica.pt/util/resumos/tabela-ascii.php)_

A Criptografia de César é uma das técnicas de criptografia mais simples e antigas conhecidas, datando dos tempos do antigo Império Romano. É um tipo de criptografia por substituição, na qual cada letra do texto é substituída por outra letra que se apresenta no alfabeto abaixo dela um número fixo de vezes.

Por exemplo, com um deslocamento (ou "shift") de 1, 'A' seria substituído por 'B', 'B' se tornaria 'C', 'Z' se tornaria 'A', e assim por diante. O número de posições que cada letra é deslocada é determinado pelo parâmetro de deslocamento fornecido.

**1. Requisitos da Função**

+ A função deve receber dois argumentos: uma string para ser cifrada e um número representando o deslocamento.
+ Deve retornar a string cifrada usando a criptografia de César.
+ Deve preservar a capitalização das letras.
+ Caracteres não alfabéticos não devem ser modificados.
+ Se um argumento não for uma string ou o deslocamento não for um número, a função deve retornar uma mensagem de erro: "Função aceita apenas strings e números."

**2. Processo de Cifragem**

+ Para cada caractere na string fornecida:
+ Se o caractere é uma letra do alfabeto, determina-se seu índice no alfabeto.
+ Aplica-se o deslocamento a esse índice.
+ Se o índice resultante estiver fora dos limites do alfabeto, ajusta-se o índice para que ele caiba no intervalo válido.
+ Substitui-se o caractere pela letra correspondente ao novo índice no alfabeto.
  
**3. Exemplo** - Com uma string "HELLO" e um deslocamento de 3, "H" seria substituído por "K", "E" seria substituído por "H", e assim por diante, resultando em "KHOOR".

### 🔶 **criptografiaCesar();** ###

🔹 **Resultado:** Função aceita apenas strings e números.

### 🔶 **criptografiaCesar("ABC", 1);** ###

🔹 **Resultado:** BCD

### 🔶 **criptografiaCesar("XYZ", 1);** ###

🔹 **Resultado:** YZA

### 🔶 **criptografiaCesar("Hello, World!", 5);** ###

🔹 **Resultado:** Mjqqt, Btwqi!

### 🔶 **criptografiaCesar("Testando 123", 3);** ###

🔹 **Resultado:** Whvwdqgr 123

### 🔶 **criptografiaCesar(123, "Testando");** ###

🔹 **Resultado:** Função aceita apenas strings e números.

### 🔶 **criptografiaCesar("Testando", "abc");** ###

🔹 **Resultado:** Função aceita apenas strings e números.

### 🔶 **criptografiaCesar({}, 5);** ###

🔹 **Resultado:** Função aceita apenas strings e números.


## **5. [Converter data ISO para BR](https://kelvysmoura.github.io/js-logic/#converterDataParaIso)** ##

Os bancos de dados geralmente guardam as datas no forma ISO 8601, que é o padrão aaaa-mm-dd (ano-mês-dia). Então quando pegamos uma informações de data do banco precisamos converter para o padrão brasileiro que é dd/mm/aaaa (dia/mês/ano), e quando precisamos salvar uma data no banco convertemos do padrão brasileiro para o padrão ISO 8601.

Neste desafio você vai precisar criar um função que recebe uma data no formato ISO 8601 e devolve a mesma data no formato brasileiro.

**Requisitos**

+ Criar uma função converterDataParaBr
+ A função deve ser capaz de receber um argumento string no formato de data ISO e devolver o mesmo valor no formato de data BR
+ Quando a função receber como argumento um valor que não está no padrão ISO 8601, deverá retornar a mensagem de erro "Data inválida!"

### 🔶 **criptografiaCesar();** ###

🔹 **Resultado:** Função aceita apenas strings e números.

### 🔶 **criptografiaCesar("ABC", 1);** ###

🔹 **Resultado:** BCD

### 🔶 **criptografiaCesar("XYZ", 1);** ###

🔹 **Resultado:** YZA

### 🔶 **criptografiaCesar("Hello, World!", 5);** ###

🔹 **Resultado:** Mjqqt, Btwqi!

### 🔶 **criptografiaCesar("Testando 123", 3);** ###

🔹 **Resultado:** Whvwdqgr 123

### 🔶 **criptografiaCesar(123, "Testando");** ###

🔹 **Resultado:** Função aceita apenas strings e números.

### 🔶 **criptografiaCesar("Testando", "abc");** ###

🔹 **Resultado:** Função aceita apenas strings e números.

### 🔶 **criptografiaCesar({}, 5);** ###

🔹 **Resultado:** Função aceita apenas strings e números.
