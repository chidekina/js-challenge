// Neste desafio você vai precisando retornar a data atual no formato dd/mm/aaaa (dia/mês/ano), usando uma instância de de Date.

// Requisitos

// Criar uma função dataAtual
// A função deve ser capaz de retornar a data atual no formato dd/mm/aaaa (dia/mês/ano)
// A função deve ter pelo menos uma instância de Date
// A função deve chamar pelo menos uma vez as seguintes funções de Date
// getDate()
// getMonth()
// getFullYear()
// Os dias e meses menores 10 devem iniciar com o um 0 (zero) na frente
// Links que podem ajudar

// new Date()
// Date.prototype.getDate
// Date.prototype.getMonth
// Date.prototype.getFullYear

// dataAtual();

// Resultado: 17/06/2024

function dataAtual(){
    data = new Date;
    if (data.getMonth() < 10){
        return `${data.getDate()}/0${data.getMonth()}/${data.getFullYear()}`
    }
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`

}