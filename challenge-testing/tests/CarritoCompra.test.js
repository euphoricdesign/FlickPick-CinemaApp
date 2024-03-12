const CarritoCompra = require('../index')

describe("Pruebas en la clase CarritoCompra", () => {

    it("Debe ser una clase", () => {
        expect(typeof CarritoCompra.prototype.constructor).toBe('function')

    })

    it("El carrito de compra debe inicializar vacío", () => {
        const carrito = new CarritoCompra()

        expect(carrito.carrito.length).toBe(0)
    })

    it("Debe tener el método agregarProducto", () => {
        const carrito = new CarritoCompra()
        expect(carrito.agregarProducto).toBeDefined()
    })

    
    it("El método agregarProducto debe agregar un producto en el carrito", () => {
        const carrito = new CarritoCompra()
        const producto = { producto: 'productoA', precio: 20 }
        carrito.agregarProducto(producto)
        expect(carrito.carrito).toEqual([{ producto: 'productoA', precio: 20 }])
    })

    it("Debe tener el método calcularTotal", () => {
        const carrito = new CarritoCompra()
        expect(carrito.calcularTotal).toBeDefined()
    })


    it("El método calcularTotal debe retornar un número", () => {
        const carrito = new CarritoCompra()
        const total = carrito.calcularTotal()
        expect(typeof total).toBe('number')
    })

    it("El método calcularTotal debe retornar la suma de los precios de todos los productos", () => {
        const carrito = new CarritoCompra()
        carrito.agregarProducto({ producto: 'productoA', precio: 30 })
        carrito.agregarProducto({ producto: 'productoB', precio: 20 })

        expect(carrito.calcularTotal()).toBe(50)
    })

    it("Debe tener el método aplicarDescuento", () => {
        const carrito = new CarritoCompra()
        expect(carrito.aplicarDescuento).toBeDefined()
    })

    it("El método aplicarDescuento aplica un descuento al total de la compra según el porcentaje especificado", () => {
        const carrito = new CarritoCompra()
        carrito.agregarProducto({ producto: 'productoA', precio: 30 })
        const precioConDescuento = carrito.aplicarDescuento(10)
        expect(precioConDescuento).toBe(27)
    })
})