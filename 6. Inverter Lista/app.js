function inverterLista(array){
    arrayInvertida = []
    if (Array.isArray(array) == false){
        return "Função aceita apenas array como argumento.";
    }
    for( i = 0; i < array.length; i++){
        arrayInvertida[i] = array[(array.length - 1) - i]
    }
    return arrayInvertida
    }
