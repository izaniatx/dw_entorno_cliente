function calcularPotencia(pbase, pexponente){
    var res = Math.pow(pbase, pexponente);
    return res;
}

function calcularRaizCuadrada(pnum){
    var res = Math.sqrt(pnum);
    return res;
}

function redondearNumeros(pdecimales, predondeo){
    var res = pdecimales.toFixed(predondeo);
    return res;
}

function trigonometria(pangulo){
    var seno = Math.sin(pangulo);
    var coseno = Math.cos(pangulo);
    var tangente = Math.tan(pangulo);

    return document.write("El seno de " + pangulo + " es: " + seno + "</br>"
        + "El coseno de " + pangulo + " es: " + coseno + "</br>"
        + "La tangente de " + pangulo + " es: " + tangente + "</br>"
    );
}

function menu(){
      const select = document.getElementById('opciones');
      const opcion = select.value;
      const resultado = document.getElementById('resultado');

      switch(opcion) {
        case 'Potencia':
            let base = prompt("Introduce el primer numero: (la base)");
            let exponencial = prompt("Introduce el segundo numero: (el exponente)");
            document.write("La solucion de " + base+ " elevado a "+ exponencial + " es: "+calcularPotencia(num1, num2));
          break;
        case 'Raiz Cuadrada':
            let raiz = prompt("Introduce un numero: ");
            document.write("La raiz cuadrada de " + raiz + " es: " + calcularRaizCuadrada(raiz));
          break;
        case 'Redondeo':
            let num = parseInt(prompt("Introduce un numero con decimales: "));
            let redondeo = prompt("Introduce a cuantos decimales quieres redondearlo: ");
    
            document.write("El numero: " + num + " redondeado da: " + redondearNumeros(num, redondeo));
          break;
        case 'Trigonometria':
            let angunlo = prompt("Introduce un angulo entre 0 y 360: ");
            trigonometria(angunlo);
          break;
        default:
          resultado.textContent = 'Por favor, selecciona una opción válida.';
      }
    }