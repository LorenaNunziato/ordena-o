function ordem_crescente(vet){
    aux=0;
    for(x = 0; x < vet.length; x++){
        for(y = x+1; y < vet.length; y++){
            if(vet[x] > vet[y]){
                aux = vet[x];
                vet[x] = vet[y];
                vet[y] = aux;
            }
        }
    }
    return vet;
}
var vet = [50, 40, 30, 20, 10];
console.log(ordem_crescente(vet));