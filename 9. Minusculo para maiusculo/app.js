function minusculoParaMaiusculo(palavra){
    if(typeof palavra != 'string'){
        return "Argumento inválido!"
    }
    palavra = palavra.split('');
    palavra = palavra.map(x => x.charCodeAt(0))
    palavra = palavra.map(function(x){
          if (97 <= x && x <= 122 || x == 250){
            return String.fromCharCode(x - 32)
          }
          return String.fromCharCode(x)
    })
    palavra = palavra.join('');
    return palavra;
}
