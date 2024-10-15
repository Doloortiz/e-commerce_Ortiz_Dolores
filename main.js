const h1 = document.querySelector("h1");
h1.innerText = "Productos";

function card () {
let data = [
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
let card = data.map(producto => {
    return `
    <div class="card" style="width: 18rem;">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${producto.id}.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
            <h5 class="card-title">Precio: ${producto.price}</h5>
            <p class="card-text>Stock: ${producto.stock}</p>
            <p class="card-text>Detalle: ${producto.detail}</p>
            <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver mas</a>
        </div>;
    </div>
    `;
}).join('');
document.querySelector(section).innerHTML = card.join('');
}
card();


