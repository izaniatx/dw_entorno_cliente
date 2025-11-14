let num1 = prompt("Introduce el primer numero: ");
let num2 = prompt("Introduce el segundo numero: ");
let num3 = prompt("Introduce el tercer numero: ");

let res1;
let res2;

if(num1 > num2){
    res1 = num1;
} else {
    res1 = num2;
}

if(res1 > num3){
    res2 = res1;
} else {
    res2 = num3;
}

document.write("El numero mas grande es: " + res2);