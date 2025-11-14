let num = prompt("Intorduce un numero: ");

let res;

if(num%2 == 0){
    res = "Si se puede dividir entre 2";
} else {
    res = "No se puede dividir entre 2";
}

document.write(res);