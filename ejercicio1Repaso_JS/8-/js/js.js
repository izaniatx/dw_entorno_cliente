let num1 = prompt("Introduce un numero: ");

let res = "No";

let resSi = "El numero es divisible por: ";

if(num1%2 == 0){
    res = "Si";
    resSi += "2, ";
}  if(num1%3 == 0){
    res = "Si";
    resSi += "3, ";
}  if(num1%5 == 0){
    res = "Si";
    resSi += "5, ";
}  if(num1%7 == 0){
    res = "Si";
    resSi += "7.";
}

if(res == "Si"){
    document.write(resSi);
} else{
    document.write(res);
}