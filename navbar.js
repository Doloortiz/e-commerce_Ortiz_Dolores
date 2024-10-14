let botones = [
    {texto: "Inicio", href: "index.html"},
    {texto: "Productos", href: "producto.html"},
    {texto: "Sobre nosotros", href: "#"}
]

const header = document.querySelector("header");

let menu = []

for (let categoria of botones) {
    menu.push(`
        <a class="nav-link" href="${categoria.href}">${categoria.texto}</a>
        `);
}
header.innerHTML = menu.join().replaceAll(",","")
