function somarNumeros (a,b){
    if (typeof a != 'number' && typeof a != 'string' && typeof a != 'boolean'){
        return 'Função aceita apenas números ou valores que podem ser convertidos em números.';
        }
    else if (typeof b != 'number' && typeof b != 'string' && typeof b != 'boolean'){
         return 'Função aceita apenas números ou valores que podem ser convertidos em números.';
    
    }
    a = Number(a);
    b = Number(b);
    
    
    if (Number.isNaN(a) == true || Number.isNaN(b) == true){
            return 'Função aceita apenas números ou valores que podem ser convertidos em números.';
        }
        
    else if (a == null || b == null){
        return 'Função aceita apenas números ou valores que podem ser convertidos em números.';
    }
        return a + b;
    }
