
function analizarFrase(pfrase){
    var numMayus = 0;
    var numMinus = 0;
    var letrasMayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var letrasMinus = "abcdefghijklmnÑopqrstuvwxyz";

    for(let i=0; i<pfrase.lenght; i++){
        let letra  = pfrase[i];
        if(letrasMinus.includes(letra)){
            numMinus ++;
        } else if(letrasMayus.includes(letra)){
            numMayus ++;
        }
    }

    document.write("La frase "+frase+" tiene: ");
    document.write("Esta cantidad de letras minusculas: "+numMinus);
    document.write("Y esta cantidad de letras mayusculas: "+numMayus);

}






let frase = prompt("Introduce una frase: ");
analizarFrase(frase);
