class Producto {
    constructor(nombre, tipo, precio, cantidad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.disponible = true;
    }
    sumaIva() {
        return this.precio * 1.21;
    }
    vender() {
        this.disponible = false;
    }
}

let arrayProducto = [];
do {
    let comprobacion = prompt("Ingrese el nombre del producto o FIN para terimnar")
    if (comprobacion === "FIN" || comprobacion === "Fin") {
        Break;
    } else {
        nombreProd = comprobacion;
        let precioProd = prompt("Ingrese el precio del producto");
        let cantidadProd = prompt("Ingrese la cantidad de productos");
        arrayProducto.push(new Producto(nombreProd, precioProd, cantidadProd));
    }
}while (comprobacion != "Fin" || comprobacion != "FIN")

console.log(arrayProducto);

for (let producto of arrayProducto) {
    document.write(producto.nombre);
    document.write(producto.tipo);
    document.write(producto.precio);
    document.write(producto.cantidad);
    document.write(producto.sumaIva);

    console.log(producto.nombre);
    console.log(producto.tipo);
    console.log(producto.cantidad);
    console.log(producto.sumaIva());
}