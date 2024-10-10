class Producto {
    constructor(titulo, detalle, precio, stock, imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}
const bmwProducto = new Producto("Bmw", "Azul electrico", 25000500, 15, 'https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg');