const text_ruta = document.querySelector("#text");

function add(){

    let p = document.createElement("p")
    p.textContent = text_ruta.textContent;
    document.body.appendChild(p);
}