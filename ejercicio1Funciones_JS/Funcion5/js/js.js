function palindromo(pfrase){
    const text = pfrase.toLocaleLowerCase().replaceAll(" ", "");
    const reversed = text.split('').reverse().join('');


    if (pfrase == reversed){
        return "La frase es palindroma.";
    } else return "la frase no es palindroma.";
}

let frase = prompt("Introduce una frase:");
document.write(palindromo(frase));