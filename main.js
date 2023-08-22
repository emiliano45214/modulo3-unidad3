function buscadorDelNumeroMayor(array){
    let numeromayor = array[0]
    for(let i = 0;i < array.length; i++ ){
        if(numeromayor < array[i]){
            numeromayor = array[i]
        }
    }
    return console.log(numeromayor);
}

buscadorDelNumeroMayor([0,40,50000,660,100])


const distancia = parseInt(prompt("ingrese la distancia en metros que necesita recorrer",""));

if(Number.isNaN(distancia)){
    document.write("DEBES INGRESAR LA DISTANCIA EN METROS")
}else if(distancia <= 0){
    document.write(`Si debes recorrer ${distancia + " " + "metros,"} significa que
     estas en tu destino`)
}else if(distancia > 0 && distancia <=1000){
    document.write(`Solo son ${distancia + " " + "metros,"} podrias ir a pie sin problemas`)
}else if(distancia > 1000 && distancia <=10000){
    document.write(`Si tienes que recorrer ${distancia + " " + "metros,"} ir bici es tu mejor opcion`)
}else if(distancia > 10000 && distancia <=30000){
    document.write(`Al hablar de ${distancia + " " + "metros,"} tu mejor opcion es ir en colectivo`)
}else if(distancia > 30000 && distancia <=100000){
    document.write(`Son ${distancia + " " + "metros,"} tu mejor opcion es conducir en auto`)
}else if(distancia > 100000){
    document.write(`Para recorrer ${distancia + " " + "metros"} sin problemas debes tomar un avion`)
}


