const divProductos = get('divProductos');
const URLMain = 'https://fakestoreapi.com/products';
const alertError = get('alertError');
const alertInfo = get('alertInfo');

function getData() {
    fetch(URLMain)
    .then((response) => {
        response.json().then((res) => {
            res.forEach((producto) => {
                crearCard(producto);
            });
        });
    })
    .catch((err) => {
        console.log(err);
        alertError.innerHTML = `Problema al traer la información`;
        alertError.style.display = 'block';
    });
}
getData();

function get(id) {
    return document.getElementById(id);
}
function crearCard(elemento) {
    const estructura = `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mt-2" style="border: 2px solid white;">
                <div class="d-flex justify-content-center align-items-center" style="height: 150px;">
                    <img class="card-img-top" src="${elemento.image}" alt="Card image" style="height: 100px; width: auto;" id="img_${elemento.id}">
                </div>
                <div class="card-body">
                    <h4 class="card-title">${elemento.title}</h4>
                    <br>
                    <p class="card-text">${elemento.description}</p>
                    <p><strong>Precio:</strong> ${elemento.price} USD</p>
                    <p><strong>Rating:</strong> ${elemento.rating.rate} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> de ${elemento.rating.count} opiniones</p>
                    <a href="#" class="btn btn-primary" id="btnComprar_${elemento.id}">Comprar</a>
                </div>
            </div>
        </div>
    `;
    divProductos.insertAdjacentHTML('beforeend', estructura);
    const btnComprar = get(`btnComprar_${elemento.id}`);
    btnComprar.addEventListener('click', (event) => {
        alertInfo.innerHTML = `Página próximamente disponible :)`;
        alertInfo.style.display = 'block';
    });
}