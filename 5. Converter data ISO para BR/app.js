// Detalhes

// Os bancos de dados geralmente guardam as datas no forma ISO 8601, que é o padrão aaaa-mm-dd (ano-mês-dia). Então quando pegamos uma informações de data do banco precisamos converter para o padrão brasileiro que é dd/mm/aaaa (dia/mês/ano), e quando precisamos salvar uma data no banco convertemos do padrão brasileiro para o padrão ISO 8601.

// Neste desafio você vai precisar criar um função que recebe uma data no formato ISO 8601 e devolve a mesma data no formato brasileiro.

// Requisitos

// Criar uma função converterDataParaBr
// A função deve ser capaz de receber um argumento string no formato de data ISO e devolver o mesmo valor no formato de data BR
// Quando a função receber como argumento um valor que não está no padrão ISO 8601, deverá retornar a mensagem de erro "Data inválida!"
// Links que podem ajudar

// Sobre o padrão ISO 8601
// typeof
// Array.split
// Array.reverse
// Array.join

// converterDataParaIso();

// Resultado: Data inválida!

// converterDataParaIso("2024-09-12");

// Resultado: 12/09/2024

// converterDataParaIso("2024-09");

// Resultado: Data inválida!

// converterDataParaIso("09-13");

// Resultado: Data inválida!

// converterDataParaIso("2024-09-13");

// Resultado: 13/09/2024

// converterDataParaIso("22-09-13");

// Resultado: Data inválida!

// converterDataParaIso("2020/09-13");

// Resultado: Data inválida!

// converterDataParaIso("13/09/2024");

// Resultado: Data inválida!

// converterDataParaIso("data");

// Resultado: Data inválida!

// converterDataParaIso(123);

// Resultado: Data inválida!

// converterDataParaIso({});

// Resultado: Data inválida!

// converterDataParaIso([]);

// Resultado: Data inválida!

// converterDataParaIso(true);

// Resultado: Data inválida!

// converterDataParaIso(false);

// Resultado: Data inválida!

function converterDataParaIso(dataIso){
    if(typeof dataIso != 'string' || dataIso.length < 10){
        return  "Data inválida!";
    }
dataEmArray = dataIso.split('-');
if (dataEmArray.length < 3){
    return  "Data inválida!";
}
dataEmArray.reverse();
dataEmArray = dataEmArray.join('/')
return dataEmArray
}