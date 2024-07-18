function somarImpares(a){
    a = Number(a);
    let numerosImpares = 0;
    
    if (Number.isInteger(a) == false || a < 1){
            return "Função aceita apenas números inteiros positivos";
        }
        for (i = 2; i <= a; i++){
            if(i % 2 != 0){
                numerosImpares += i
            }
        }
        return numerosImpares + 1;
    }
