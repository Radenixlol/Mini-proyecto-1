
document.getElementById("NAV").addEventListener("click", animatebars)

let NAV1 = document.getElementById("parts_NAV1")
let NAV2 = document.getElementById("parts_NAV2")
let NAV3 = document.getElementById("parts_NAV3")

function animatebars(){
    NAV1.classList.toggle("activeparts_NAV1")
    NAV2.classList.toggle("activeparts_NAV2")
    NAV3.classList.toggle("activeparts_NAV3")

}

// Hero

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}