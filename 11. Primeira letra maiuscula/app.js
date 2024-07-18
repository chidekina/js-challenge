function primeiraLetraMaiuscula(texto){
    textoEmArray = []
    if(typeof texto != 'string'){
        return "Argumento inválido!"
    }
    textoEmArray = texto.split(' ')
    textoEmArray = textoEmArray.map(function(x){
        primeiraLetra = x.slice(0,1);
        palavra = x.slice(1, x.length);
        palavra = palavra.toLowerCase();
        primeiraLetra = primeiraLetra.toUpperCase();
        return primeiraLetra + palavra;
    })
    textoEmArray = textoEmArray.join(' ')
    return textoEmArray
}
