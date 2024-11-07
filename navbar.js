let nav = [
    {texto: "Inicio", href: "index.html"},
    {texto: "Productos", href: "producto.html"},
    {texto: "Sobre nosotros", href: "#"}
]

let menuAutos = []
for (let item of nav) {
  menuAutos.push(
    `<li class="nav-item">
      <a class="item-nav" id="category" data-category="${item.category}"></a>
    </li>`
  );
}

let menu =`
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Tienda</a>
        <ul class="navbar-nav">
            ${menuAutos.join('')}
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
        ${localStorage.getItem("email") ? 
            `<li><span>${localStorage.getItem("email")}</span></li>
            <span>|</span>
            <li><img height="25" src="https://github.com/julioavantt/guayerd_login/blob/main/cart.png?raw=true" alt="Comprar"/><b id="quantity">${localStorage.getItem("quantity")}</b></li>
            <span>|</span>
            <li><span onclick="logOut()">Cerrar Sesión</span></li>` 
            : "< a href='./login.html'><span>Iniciar sesion</span></a>"
        }
    </div>
  </nav>;`

function logOut () {
  localStorage.clear()
  location.href = "./index.html"
}
