const fecha1 = new Date("2026-06-25");
const fecha2 = new Date(); // hoy

const diferenciaMs = fecha1 - fecha2; // resultado en milisegundos
console.log(diferenciaMs); // algo como 55958400000

// Convertir a días:
const dias = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
document.write("Faltan "+dias+" dias");