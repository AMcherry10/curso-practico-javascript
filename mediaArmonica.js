function calcularMediaArmonica(lista){
    //     let sumaLista = 0;
    // for (let i =0; i < lista.length; i++) {
    //     sumaLista = sumaLista +lista[i];
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + 1/nuevoElemento;
        }
    );
    
    const promedioLista = lista.length / sumaLista;
    return promedioLista;
    }