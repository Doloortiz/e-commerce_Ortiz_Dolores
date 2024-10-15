class Producto {
    constructor(titulo, detalle, precio, stock, imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}
const id = window.location.search.split("=")[1];

const data = [
    {
        "id": 1,
        "price": "$6.59",
        "stock": "139",
        "detail": "Maroon"
      }, {
        "id": 2,
        "price": "$6.31",
        "stock": "9712",
        "detail": "Violet"
      }, {
        "id": 3,
        "price": "$2.27",
        "stock": "9",
        "detail": "Maroon"
      }, {
        "id": 4,
        "price": "$6.70",
        "stock": "4",
        "detail": "Fuscia"
      }, {
        "id": 5,
        "price": "$5.39",
        "stock": "91",
        "detail": "Turquoise"
      }, {
        "id": 6,
        "price": "$2.62",
        "stock": "9",
        "detail": "Orange"
      }, {
        "id": 7,
        "price": "$8.30",
        "stock": "7",
        "detail": "Indigo"
      }, {
        "id": 8,
        "price": "$2.88",
        "stock": "555",
        "detail": "Violet"
      }, {
        "id": 9,
        "price": "$2.30",
        "stock": "56",
        "detail": "Orange"
      }, {
        "id": 10,
        "price": "$7.97",
        "stock": "5",
        "detail": "Puce"
      }
    ];

const producto = data.find((prod) => prod.id == id);
