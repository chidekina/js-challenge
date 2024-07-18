# Índice

* [JS Challenge](#js-challenge--)
* [Hello World](#1-hello-world)
* [Somar números](##2-somar-números)
* [Somar ímpares](#3-somar-ímpares)
* [Criptografia de César](#4-criptografia-de-césar)
* [Converter data ISO para BR](#5-converter-data-iso-para-br)
* [Inverter lista](#6-inverter-lista)
* [Template](#7-template)
* [Converter data BR para ISO](#8-converter-data-br-para-iso)
* [Minúsculo para maiúsculo](#9-minúsculo-para-maiúsculo)
* [Data atual](#10-data-atual)
* [Primeira letra maiúscula](#11-primeira-letra-maiúscula)

# JS Challenge - 

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


## **6. [Inverter lista](https://kelvysmoura.github.io/js-logic/#inverterLista)** ##

Invertendo lista.
_Para este desafio, não foi permitido o uso dos métodos da Array(Array.reverse; Array.push...)_

Para esse desafio você vai precisar criar uma função que seja capaz de receber um array como argumento e retorna esse mesmo array porém na ordem inversa. Para os casos em que sua função receber um argumento diferente de array, deverá ser retornada uma mensagem de erro.

**Requisitos**

+ Criar uma função inverterLista
+ Sua função deve ser capaz de receber pelo menos um argumento
+ Quando a função receber como argumento um array, deverá retornar os mesmo array recebido porém na ordem invertida
+ Quando a função receber qualquer outro argumento diferente de um array, deverá retornar a frase "Função aceita apenas array como argumento."

### 🔶 **inverterLista();** ###

🔹 **Resultado:** 

### 🔶 **inverterLista(["HTML","CSS","JS","ReactJS"]);** ###

🔹 **Resultado:** 

### 🔶 **inverterLista("array list");** ###

🔹 **Resultado:** 

### 🔶 **inverterLista([{"type":"Frontend"},{"type":"Backend"}]);** ###

🔹 **Resultado:** 

### 🔶 **inverterLista({});** ###

🔹 **Resultado:** 

### 🔶 **inverterLista([]);** ###

🔹 **Resultado:** 

### 🔶 **inverterLista(10);** ###

🔹 **Resultado:** 

## **7. [Template](https://kelvysmoura.github.io/js-logic/#template)** ##

Um template geralmente é uma estrutura de texto padrão com espaços reservados por meio de identificadores para adicionar a informação real. Por exemplo, um template de email sempre terá a mesma estrutura e o que muda é o nome do usuário que recebe esse email.

**Exemplo** <>Bem vindo :fulano:<>

**Resultado esperado** <>Bem vindo João<>

Em algum momento no código, antes desse email ser enviado foi identificado no banco o usuário de nome João essa informação foi passada para função responsável por adicionar os dados ao template e substituir os identificadores pelo valor real.

Neste desafio você vai precisar criar uma função que receber como primeiro argumento uma string e como segundo argumento um template html simples que contém um identificador que precisa ser substituído pelo valor do primeiro argumento.

**Requisitos**

+ Criar uma função template
+ Sua função deve ser capaz de receber dois argumentos, um objeto e uma string
+ A função dev substituir todos os identificadores encontrados dentro do objeto

### 🔶 **template({"fulano":"Dev"}, "Bem vindo :fulano:!");** ###

🔹 **Resultado:** 

### 🔶 **template({"username":"Dev"}, "Olá :username:, vamos iniciar a sua jornada?");** ###

🔹 **Resultado:** 

### 🔶 **template({"username":"Dev","order":123}, "Parabéns :username:, seu pedido #:order: foi finalizado com sucesso!");** ###

🔹 **Resultado:** 


## **8. [Converter data BR para ISO](https://kelvysmoura.github.io/js-logic/#converterDataParaBr)** ##

Os bancos de dados geralmente guardam as datas no forma ISO 8601, que é o padrão aaaa-mm-dd (ano-mês-dia). Então quando pegamos uma informações de data do banco precisamos converter para o padrão brasileiro que é dd/mm/aaaa (dia/mês/ano), e quando precisamos salvar uma data no banco convertemos do padrão brasileiro para o padrão ISO 8601.

Neste desafio você vai precisar criar um função que recebe uma data no formato BR e devolve a mesma data no formato ISO.

**Requisitos**

+ Criar uma função converterDataParaIso
+ A função deve ser capaz de receber um argumento string no formato de data BR e devolver o mesmo valor no formato de data ISO
+ Quando a função receber como argumento um valor que não está no padrão BR, deverá retornar a mensagem de erro "Data inválida!"

### 🔶 **converterDataParaBr();** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr("12/09/2024");** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr("2024/09");** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr("09/13");** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr("13/09/2024");** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr("22/09/13");** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr("2020-09/13");** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr("13-09-2024");** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr("data");** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr(123);** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr({});** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr([]);** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr(true);** ###

🔹 **Resultado:** 

### 🔶 **converterDataParaBr(false);** ###

🔹 **Resultado:** 


## **9. [Minúsculo para maiúsculo](https://kelvysmoura.github.io/js-logic/#minusculoParaMaiusculo)** ##
_Para este desafio, foi utilizado a [Tabela ASCII](https://www.matematica.pt/util/resumos/tabela-ascii.php)_
_Para este desafio, não foi permitido o uso de String.toUpperCase()_

Neste desafio você vai receber um texto qualquer e precisará retornar o mesmo texto porém com todas as letras e maiúsculas

**Requisitos**

+ Criar uma função minusculoParaMaiusculo
+ A função deve ser capaz de receber um texto como argumento e retornar o mesmo texto com todas as letras maiúsculas.
+ A função deve retornar a mensagem de erro "Argumento inválido!" quando receber um argumento diferente de string

### 🔶 **minusculoParaMaiusculo();** ###

🔹 **Resultado:** 

### 🔶 **minusculoParaMaiusculo("katchau!");** ###

🔹 **Resultado:** 

### 🔶 **minusculoParaMaiusculo(123);** ###

🔹 **Resultado:** 

### 🔶 **minusculoParaMaiusculo("Texto em letras maiúsculas");** ###

🔹 **Resultado:** 

### 🔶 **minusculoParaMaiusculo(["Texto"]);** ###

🔹 **Resultado:** 

### 🔶 **minusculoParaMaiusculo("CONTEÚDO DE TEXTO");** ###

🔹 **Resultado:** 

### 🔶 **minusculoParaMaiusculo({});** ###

🔹 **Resultado:** 

### 🔶 **minusculoParaMaiusculo(false);** ###

🔹 **Resultado:** 

### 🔶 **minusculoParaMaiusculo("0123456789");** ###

🔹 **Resultado:** 

### 🔶 **minusculoParaMaiusculo(true);** ###

🔹 **Resultado:** 


## **10. [Data atual](https://kelvysmoura.github.io/js-logic/#dataAtual)** ##

Neste desafio você vai precisando retornar a data atual no formato dd/mm/aaaa (dia/mês/ano), usando uma instância de de Date.

**Requisitos**

+ Criar uma função dataAtual
+ A função deve ser capaz de retornar a data atual no formato dd/mm/aaaa (dia/mês/ano)
+ A função deve ter pelo menos uma instância de Date
+ A função deve chamar pelo menos uma vez as seguintes funções de Date
+ getDate()
+ getMonth()
+ getFullYear()
+ Os dias e meses menores 10 devem iniciar com o um 0 (zero) na frente

### 🔶 **dataAtual();** ###

🔹 **Resultado:** 18/06/2024


## **11. [Primeira letra maiúscula](https://kelvysmoura.github.io/js-logic/#primeiraLetraMaiuscula)** ##
_Para este desafio, foi utilizado a [Tabela ASCII](https://www.matematica.pt/util/resumos/tabela-ascii.php)_

Neste desafio você vai receber um texto qualquer e precisará retornar o mesmo texto em letras minúsculas mas com a primeira letra de cada palavra maiúscula.

**Requisitos**

+ Criar uma função primeiraLetraMaiuscula
+ A função deve ser capaz de receber um texto como argumento e retornar o mesmo texto com todas as letras minusculas a primera letra de cada palavra em maipusculo
+ A função deve retornar a mensagem de erro "Argumento inválido!" quando receber um argumento diferente de string

### 🔶 **primeiraLetraMaiuscula();** ###

🔹 **Resultado:** 

### 🔶 **primeiraLetraMaiuscula("Katchau!");** ###

🔹 **Resultado:** 

### 🔶 **primeiraLetraMaiuscula(123);** ###

🔹 **Resultado:** 

### 🔶 **primeiraLetraMaiuscula("texto em letras maiúsculas");** ###

🔹 **Resultado:** 

### 🔶 **primeiraLetraMaiuscula(["Texto"]);** ###

🔹 **Resultado:** 

### 🔶 **primeiraLetraMaiuscula("cONTEÚDO de tEXTO");** ###

🔹 **Resultado:** 

### 🔶 **primeiraLetraMaiuscula({});** ###

🔹 **Resultado:** 

### 🔶 **primeiraLetraMaiuscula(false);** ###

🔹 **Resultado:** 

### 🔶 **primeiraLetraMaiuscula("0123456789");** ###

🔹 **Resultado:** 

### 🔶 **primeiraLetraMaiuscula(true);** ###

🔹 **Resultado:** 
