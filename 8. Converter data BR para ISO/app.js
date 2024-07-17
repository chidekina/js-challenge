// Os bancos de dados geralmente guardam as datas no forma ISO 8601, que é o padrão aaaa-mm-dd (ano-mês-dia). Então quando pegamos uma informações de data do banco precisamos converter para o padrão brasileiro que é dd/mm/aaaa (dia/mês/ano), e quando precisamos salvar uma data no banco convertemos do padrão brasileiro para o padrão ISO 8601.

// Neste desafio você vai precisar criar um função que recebe uma data no formato BR e devolve a mesma data no formato ISO.

// Requisitos

// Criar uma função converterDataParaIso
// A função deve ser capaz de receber um argumento string no formato de data BR e devolver o mesmo valor no formato de data ISO
// Quando a função receber como argumento um valor que não está no padrão BR, deverá retornar a mensagem de erro "Data inválida!"
// Links que podem ajudar

// typeof
// Array.split
// Array.reverse
// Array.join

// converterDataParaBr();

// Resultado: Data inválida!

// converterDataParaBr("12/09/2024");

// Resultado: 2024-09-12

// converterDataParaBr("2024/09");

// Resultado: Data inválida!

// converterDataParaBr("09/13");

// Resultado: Data inválida!

// converterDataParaBr("13/09/2024");

// Resultado: 2024-09-13

// converterDataParaBr("22/09/13");

// Resultado: Data inválida!

// converterDataParaBr("2020-09/13");

// Resultado: Data inválida!

// converterDataParaBr("13-09-2024");

// Resultado: Data inválida!

// converterDataParaBr("data");

// Resultado: Data inválida!

// converterDataParaBr(123);

// Resultado: Data inválida!

// converterDataParaBr({});

// Resultado: Data inválida!

// converterDataParaBr([]);

// Resultado: Data inválida!

// converterDataParaBr(true);

// Resultado: Data inválida!

// converterDataParaBr(false);

// Resultado: Data inválida!

function converterDataParaBr(dataBr){
    if (typeof dataBr != 'string'){
        return "Data inválida!"
    }
    else if(dataBr.length < 10){
       return "Data inválida!"

    }
    dataBrEmArray = dataBr.split('/')
    if (dataBrEmArray.length < 3){
        return "Data inválida!"
    }
    dataBrEmArray.reverse()
    dataBrEmArray = dataBrEmArray.join('-')
    return dataBrEmArray
}