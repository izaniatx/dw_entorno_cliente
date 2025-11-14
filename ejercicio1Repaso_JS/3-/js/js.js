let num1 = prompt("Introduce el primer numero: ");
let num2 = prompt("Introduce el segundo numero: ");

let res;

if(num1 > num2){
    res = num1;
} else {
    res = num2;
}

document.write("El numero mas grande es: " + res);