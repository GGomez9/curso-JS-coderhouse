
alert(`Este es un simulador de un restaurante para armar los pedidos. \nToca aceptar para continuar`)

function datosUsuario() {
    let nombre = prompt(`Ingrese su nombre`);
    let eleccion;
    let lista = 0;
    let total = 0;

    //array
    const precios = [100, 80, 20];

        while (lista !== 4 && !isNaN(lista) && lista !== 5) {
            lista = Number(prompt(`Hola ${nombre}!. ¿Que quieres comer hoy? \nIngrese la opcion que desea ver \n1) Pastas $100 \n2) Sandwich $80 \n3) Empanadas $20 c/u \n4) Terminar la compra \n5) Salir`));

            switch (lista) {
                case 1:
                    eleccion = parseInt(prompt("Elegiste Pastas, el costo del plato es de $100. ¿cuantos vas a querer?"));
                    cantidad = precios[0];
                    total += eleccion * cantidad;
                    alert(`El importe hasta el momento es de $${total}`);
                    break;
                case 2:
                    eleccion = parseInt(prompt("Elegiste Sandwich, el costo de cada sandwich es de $80. ¿cuantos vas a querer?"));
                    cantidad = precios[1];
                    total += eleccion * cantidad;
                    alert(`El importe hasta el momento es de $${total}`)
                    break;
                case 3:
                    eleccion = parseInt(prompt("Elegiste Empanadas, el costo de cada una es de $20. ¿cuantas vas a querer?"));
                    cantidad = precios[2];
                    total += eleccion * cantidad;
                    alert(`El importe hasta el momento es de $${total}`);
                    break;
                case 4:
                    alert(`El total de tu compra es de $${total}`);
                    break;
                case 5:
                    break;
                default:
                    alert("Opción no válida, ingresa un numero de la lista");
            }
            if (lista === 4 && lista !== 5) {
                alert(`Excelente eleccion! Ahora vamos a elegir la forma de pago...`);
                break;
                }
            }
            return total;
}
// fin de la funcion de toma de pedidos

function formaPago(total) {
    let pago = 0;
    let totalAPagar = total

    pago = parseInt(prompt(`¿Como queres abonar la compra? \n1) Efectivo o transferencia (sin recargo). \n2)Tarjeta Credito (recargo del 10%). \n3)Tarjeta de debito (recargo de 5%) \n 4)Cancelar compra`))

    switch (pago) {
        case 1:
            totalAPagar = total
            break;
        case 2:
            totalAPagar = total * 1.10;
            break;
        case 3:
            totalAPagar = total * 1.05;
            break;
        case 4:
                alert(`Gracias por usar el simulador!!! ;)`);
                return;
        default:
            alert(`Ingreso invalido, Por favor ingrese una opcion para abonar su compra`);
            return;
    }
    alert(`El total de tu compra es de $${totalAPagar}`)
    return totalCompra

}
let totalCompra = datosUsuario();
if (totalCompra !== null) {
totalCompra = formaPago(totalCompra);
}

function propina(totalCompra) { 
    let dejaPropina = confirm(`¿Desea usted agregar una propina?`);

        if (dejaPropina) {
            let propinaUser = parseInt(prompt(`Ingrese el monto de la propina`));
                if (!isNaN(propinaUser)){
                alert(`El monto total es de $${totalCompra + propinaUser}`)
                }
                else {
                alert(`ingreso no valido. El monto total sigue siendo de $${totalCompra}`);
                }
        } else {
            alert(`el monto total es es de $${totalCompra}`)
        }
}
    propina(totalCompra)
