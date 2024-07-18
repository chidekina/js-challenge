function helloWorld(palavra = ''){
    if (typeof palavra == 'string'){
    return palavra ? `Hello ${palavra}!` : 'Hello World!'
    }
    return 'Função aceita apenas string como argumento!'
}
