const h1 = document.querySelector("h1");
h1.innerText = "Productos";

let data = [
{
    "brand": "Bmw",
    "id": 1,
    "category": "Moderno",
    "price": "$6.59",
    "stock": "139",
    "detail": "Azul"
  }, {
    "brand": "Alfa Romeo",
    "id": 2,
    "category": "Moderno",
    "price": "$6.31",
    "stock": "9712",
    "detail": "Rojo"
  }, {
    "brand": "Mercedes Benz",
    "id": 3,
    "category": "Moderno",
    "price": "$2.27",
    "stock": "9",
    "detail": "Gris oscuro"
  }, {
    "brand": "Audi",
    "id": 4,
    "category": "Moderno",
    "price": "$6.70",
    "stock": "4",
    "detail": "Negro"
  }, {
    "brand": "MG MGA",
    "id": 5,
    "category": "Antiguo",
    "price": "$5.39",
    "stock": "91",
    "detail": "Rojo"
  }, {
    "brand": "Lamborghini",
    "id": 6,
    "category": "Moderno",
    "price": "$2.62",
    "stock": "9",
    "detail": "Negro"
  }, {
    "brand": "Chevrolet",
    "id": 7,
    "category": "Antiguo",
    "price": "$8.30",
    "stock": "7",
    "detail": "Turquesa"
  }, {
    "brand": "Dodge Challenger",
    "id": 8,
    "category": "Moderno",
    "price": "$2.88",
    "stock": "555",
    "detail": "Negro"
  }, {
    "brand": "Maserati",
    "id": 9,
    "category": "Moderno",
    "price": "$2.30",
    "stock": "56",
    "detail": "Negro"
  }
];

function cards (data) {

let cards = data.map((producto) => `
    <div class="card" style="width: 18rem;">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${producto.id}.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
            <h2 class="card-brand">${producto.brand}</h2>
            <h5 class="card-price">Precio: ${producto.price}</h5>
            <p class="card-text">Stock: ${producto.stock}</p>
            <p class="card-text">Detalle: ${producto.detail}</p>
            <a href="producto.html?id=${producto.id}" class="."><button>Ver mas</button></a>
        </div>
    </div>`);

document.querySelector(".container").innerHTML = cards.join('');
}
cards(data);

const buscador = document.querySelector("#inputSearch");
const buttonSearch = document.querySelector("#search");
const buttonReset = document.querySelector("#reset");

//buscar productos
buttonSearch.addEventListener("click", () => {
  const busqueda = buscador.value.trim().toLowerCase();
  const filterData = data.filter(producto => producto.brand.toLowerCase () === busqueda);
})

//
if (filtrarData.lenght > 0) {
  cards(filterData);
} else {
 document.querySelector("section").innerText = "producto no encontrado"
}

//limpiar busqueda
buttonReset.addEventListener("click", () => {
  buscador.value = '';
  cards(data);
})



