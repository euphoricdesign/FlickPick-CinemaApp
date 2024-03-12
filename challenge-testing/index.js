// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.


class CarritoCompra {
    constructor() {
        this.carrito = []
    }

    agregarProducto(producto) {
        if (!producto || typeof producto !== 'object' || !producto.hasOwnProperty('precio')) {
            throw new Error('Producto invalido')
        }
        this.carrito.push(producto)
    }

    calcularTotal() {
        return this.carrito.reduce((acc, current) => acc + current.precio, 0)
    }

    aplicarDescuento(porcentaje) {
        if (porcentaje <= 0 || porcentaje > 100) {
            throw new Error('Porcentaje invalido')
        }
        const descuento = (this.calcularTotal() * porcentaje) / 100 
        return this.calcularTotal() - descuento
    }
}

module.exports = CarritoCompra