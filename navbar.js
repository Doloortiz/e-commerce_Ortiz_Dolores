let categorias = [
    {texto: "Inicio", href: "index.html"},
    {texto: "Productos", href: "producto.html"},
    {texto: "Sobre nosotros", href: "#"}
]

let menuAutos = []

for (let item of categorias) {
  menuAutos.push(
    <li class="nav-item">
      <a class="nav-link" id="category" data-category="${item.category}"></a>
    </li>
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
    </div>
  </nav>;`

//header.innerHTML = menu.join().replaceAll(",","")
document.querySelector("header").innerHTML = menu.join("")