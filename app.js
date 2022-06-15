const descuento = 500;
const iva = 0.21;
const opcion1 = 3000;
const opcion2 = 1500;
const opcion3 = 1500;

let pregunta = prompt("Selecciona los productos:\n1: enteriza = $3000\n 2: corpiño = $1500\n 3: bombacha = $1500");

let sumaTotal = 0;

function calcularPrecioFinal (precio) {
    sumaTotal = precio * iva - descuento;
        alert("Precio final " + sumaTotal);
}

switch (pregunta) {
    case "1":
        calcularPrecioFinal (opcion1);
        break;
    case "2":
        scalcularPrecioFinal (opcion2)
        break;
    case "3":
        calcularPrecioFinal (opcion3);
        break;
    default:
        alert("error");
        break;
}