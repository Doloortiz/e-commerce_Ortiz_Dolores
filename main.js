const h1 = document.querySelector("h1");
h1.innerText = "Productos";

const cardsArray = [];
function cardsProductos(){
for (let card = 1 ; card < 10 ; card++) {
    const cards =
        `<div class="card" style="width: 18rem;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${card}.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card ${card}</h5>
                <p class="card-text">Informacion</p>
                <a href="./producto.html" class="btn btn-primary">Ver mas</a>
            </div>
        </div>`
    
    cardsArray.push(cards)
    }
}
cardsProductos()
document.querySelector("section").innerHTML = cardsArray.join('');
// Selecciona la section y reemplaza su contenido con las tarjetas que se almacenaron en el Array.

