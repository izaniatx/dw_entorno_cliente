let num1 = prompt("Introduce un numero: ");

let res = "No";

if(num1%2 == 0 || num1%3 == 0 || num1%5 == 0 || num1%7 == 0){
    res = "Si";
} else {
    res = "No";
} 

document.write("El numero "+ res +" es dividible por 2, 3, 5 o 7");