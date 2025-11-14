let num1= prompt("Introduce un numero");
let divisores = "";

for (let i=0; i<num1.length; i++){

    if(num1%i == 0){
    
        divisores += ", "+i;

    }
}

document.write("Los divisores de "+num1+" son "+divisores+"."); 