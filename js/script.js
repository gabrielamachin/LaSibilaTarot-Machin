const $tienda = document.querySelector(".seccion-tienda-js");
const $modalImgTienda = document.querySelector(".img-modal-js");

$tienda.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if(e.target.classList.contains('img-btn-modal-js')){
        let urlImg = e.target.attributes[0].nodeValue;
        $modalImgTienda.src = urlImg;
    }
})