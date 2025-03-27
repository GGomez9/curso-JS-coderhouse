
alert(`Este es un simulador de un restaurante para armar los pedidos. Toca aceptar para continuar`);

function datosUsuario() {
    let menu;
    let eleccion;
    let total = 0; // Variable para acumular el total

    const precios = [100, 80, 20]; // Precios de los productos

    while (true) { // Bucle infinito (se corta con `break`)
        menu = Number(prompt(`¿Qué quieres comer hoy? \nIngrese la opción que desea ver: \n1) Pastas $100 \n2) Sandwich $80 \n3) Empanadas $20 c/u \n4) Salir`));

        if (menu === 4) { // Si elige "Salir", termina el bucle
            alert("Gracias por usar el simulador. ¡Hasta luego!");
            break;
        }

        switch (menu) {
            case 1:
                eleccion = parseInt(prompt("Elegiste Pastas, el costo del plato es de $100. ¿Cuántas vas a querer?"));
                total += eleccion * precios[0]; // Acumula el total
                break;
            case 2:
                eleccion = parseInt(prompt("Elegiste Sandwich, el costo de cada sandwich es de $80. ¿Cuántos vas a querer?"));
                total += eleccion * precios[1]; // Acumula el total
                break;
            case 3:
                eleccion = parseInt(prompt("Elegiste Empanadas, el costo de cada una es de $20. ¿Cuántas vas a querer?"));
                total += eleccion * precios[2]; // Acumula el total
                break;
            default:
                alert("Opción no válida, ingresa un número de la lista");
        }

        alert(`El total hasta ahora es de $${total}`); // Muestra el total acumulado
    }

    return total; // Retorna el total al finalizar
}

console.log(datosUsuario()); // Muestra el total final en la consola
