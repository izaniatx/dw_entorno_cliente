function parImpar(pnum){

    if (pnum%2 == 0){
        return "El numero es Par.";
    } else {
        return "El numero es Impar.";
    }
} 

let num = prompt("Introduce un numero: ");
document.write(parImpar(num));