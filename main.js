function sprint1 () { 
const h1 = document.querySelector("h1");
h1.innerText = "Productos";

const array = [];
for (let i = 1 ; i < 10 ; i++) {

    const cards =
        <div class="card" style="width: 18rem;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card ${i}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Ver mas</a>
            </div>
        </div>
    
    array.push(cards);
} 
document.querySelector("section").innerHTML = array.join('');
}
sprint1 ()

// Selecciona la section y reemplaza su contenido con las tarjetas que se almacenaron en el Array.