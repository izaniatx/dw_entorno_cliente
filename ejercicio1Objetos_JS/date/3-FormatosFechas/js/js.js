var num = prompt("Introduce 1, 2 o 3: ");
const fecha = new Date();

const dia = String(fecha.getDate());
const mes = String(fecha.getMonth()+1);
const anio = fecha.getFullYear();

let mesString;

if(num == 1){
    document.write("La fecha de hoy es: "+dia+"/"+mes+"/"+anio);

} else if(num == 2){
    if (mes == 1){
        mesString = "Enero";
    } else if (mes == 2){
        mesString = "Febrero";
    } else if (mes == 3){
        mesString = "Marzo";
    } else if (mes == 4){
        mesString = "Abril";
    } else if (mes == 5){
        mesString = "Mayo";
    } else if (mes == 6){
        mesString = "Junio";
    } else if (mes == 7){
        mesString = "Julio";
    } else if (mes == 8){
        mesString = "Agosto";
    } else if (mes == 9){
        mesString = "Septiembre";
    } else if (mes == 10){
        mesString = "Octubre";
    } else if (mes == 11){
        mesString = "Noviembre";
    } else if (mes == 12){
        mesString = "Diciembre";
    }

    document.write("La fecha de hoy es: "+dia+", de "+mesString+" de "+anio);

} else if(num == 3){
    var vr = new Date();
    document.write("La fecha de hoy es: "+fecha);
} else {
    document.write("ERROR: Numero introducido no es correcto.");
}