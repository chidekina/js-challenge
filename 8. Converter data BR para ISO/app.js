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
