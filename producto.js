let elemento = window.location.search.split("=")[1];

const data = [
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

  const prodEncontrado = data.find((data) => data.id === elemento);

  const card = `
     <div class="card" style="width: 18rem;">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${producto.id}.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h2 class="card-brand">${prodEncontrado.brand}</h2>
            <h5 class="card-price">Precio: ${prodEncontrado.price}</h5>
            <p class="card-text>Stock: ${prodEncontrado.stock}</p>
            <p class="card-text>Detalle: ${prodEncontrado.detail}</p>
            <a href="producto.html?prod=${prodEncontrado.id}" class="btn btn-primary">Ver mas</a>
        </div>

      ${localStorage.getItem("email") ? 
          `<div class="input-group">
            <button class="btn btn-outline-secondary" type="button" onclick="increaseItem()">+</button>
            <input type="number" class="form-control text-center" value="1">
            <button class="btn btn-outline-secondary" type="button" onclick="decreaseItem()">-</button>
          </div>
          <a href class="btn primary-btn" onclick="addItems()">Comprar ahora</a>` 
          : 
          `<a href="./login.html"><button type="button" class="btn btn-primary btn-lg">Iniciar sesión para comprar</button></a>`
      }
    </div>`;

  document.querySelector(".container").innerHTML = card;


  const counter = document.querySelector("input")

  function increaseItem() {
    if (Number(counter.value) < product.stock) {
      counter.value = Number(counter.value) + 1;
    }
  }

  function decreaseItem() {
    if (Number(counter.value) > 1) {
      counter.value = Number(counter.value) - 1
    }
  }

  function addItems() {
    const cart = JSON.parse(localStorage.getItem("cart"))
    const idProduct = Number(window.location.search.split("=")[1])
    const product = data.find(item => item.id === idProduct)
    const existeIdCart = cart.some(item => item.product.id === idProduct)

    if(existeIdCart) {
      cart = cart.map(item => {
        if(item.product.id === idProduct) {
          return { ...item, quantity: item.quantity + Number(counter.value) }
        } else {
          return item
        }
      })
      } else {
        cart.push({product: product, quantity: Number(counter,value) })
      }

      localStorage.setItem("cart", JSON.stringify(cart))

      let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
      localStorage.setItem("quantity", quantity)
      const quantityTag = document.querySelector("#quantity")

      quantityTag.innerText = quantity

      counter.value = "1"
    }