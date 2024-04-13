const CarritoCompra = require('./challenge-testing/CarritoCompra');


const carrito = new CarritoCompra();


carrito.agregarProducto({ nombre: 'Producto 1', precio: 10, cantidad: 2 });
carrito.agregarProducto({ nombre: 'Producto 2', precio: 20, cantidad: 1 });


const totalSinDescuento = carrito.calcularTotal();
console.log('Total sin descuento:', totalSinDescuento);


const totalConDescuento = carrito.aplicarDescuento(10);
console.log('Total con descuento:', totalConDescuento);
