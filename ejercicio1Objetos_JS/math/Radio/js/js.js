function calcularDiametro(pnum){
    var res = pnum*2;
    return res;
}

function calcularCircunferencia(pnum){
    var res = 2 * Math.PI * pnum
    return res;
}

function calcularSuperficie(pnum){
    var res = 4 * Math.PI * Math.pow(pnum, 2);
    return res;
}

function caluclarVolumen(pnum){
    var res = (4/3) * Math.PI * Math.pow(pnum, 3);
    return res;
}


var num = prompt("Introduce un numero: ");
document.write("El diametro de " + num + " es: " + calcularDiametro(num) + "</br>");
document.write("La circunferencia de " + num + " es: " + calcularCircunferencia(num) + "</br>");
document.write("La superficie de " + num + " es: " + calcularSuperficie(num) + "</br>");
document.write("El volumen de " + num + " es: " + caluclarVolumen(num) + "</br>");