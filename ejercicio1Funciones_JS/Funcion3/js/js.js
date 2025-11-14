function calcularLetraDNI(pnum){
    if (pnum > 99999999 || pnum < 0){
        return "ERROR: El numero no tiene los numeros necesarios.";
    }

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let res = pnum%23; 
    return letras[res];

}


let num = prompt("Introduce el numero del DNI SIN letra:");

document.write("La letra del DNI: "+num+", es: "+calcularLetraDNI(num));