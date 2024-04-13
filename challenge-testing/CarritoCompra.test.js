const CarritoCompra = require('../challenge-testing/CarritoCompra');

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('constructor inicializa un carrito vacío', () => {
        expect(carrito.productos).toEqual([]);
    });

    test('agregarProducto agrega un producto al carrito', () => {
        const producto = { nombre: 'Producto 1', precio: 10, cantidad: 1 };
        carrito.agregarProducto(producto);
        expect(carrito.productos).toHaveLength(1);
        expect(carrito.productos[0]).toEqual(producto);
    });

    test('calcularTotal calcula correctamente el total de la compra', () => {
        const productos = [
            { nombre: 'Producto 1', precio: 10, cantidad: 1 },
            { nombre: 'Producto 2', precio: 20, cantidad: 2 }
        ];
        productos.forEach(producto => carrito.agregarProducto(producto));
        expect(carrito.calcularTotal()).toBe(50);
    });

    test('aplicarDescuento aplica correctamente el descuento al total', () => {
        const productos = [
            { nombre: 'Producto 1', precio: 10, cantidad: 1 },
            { nombre: 'Producto 2', precio: 20, cantidad: 2 }
        ];
        productos.forEach(producto => carrito.agregarProducto(producto));
        expect(carrito.aplicarDescuento(10)).toBe(45);
    });
});
