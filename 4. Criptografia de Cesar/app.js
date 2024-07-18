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
