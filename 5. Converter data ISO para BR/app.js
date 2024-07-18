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
