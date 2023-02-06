const data_skill = [
  { skill: "html", porcent: "80" },
  { skill: "css", porcent: "60" },
  { skill: "js", porcent: "20" },
  { skill: "python", porcent: "100" },
  { skill: "java", porcent: "40" },
];
const div = document.querySelector(".box-k");
const htmlskill = () => {
  data_skill.map(function (data_skill) {
    let html_skill = `
        <div class="skill">
            <div class="detalles">
              <span>${data_skill.skill.toUpperCase()}</span>
              <span>${data_skill.porcent}%</span>
            </div>
            <div class="barra">
              <div class="barra-${data_skill.porcent}"></div>
            </div>
        </div>
    `;
    div.innerHTML += html_skill;
  });
};

htmlskill();

const navSlide = () => {
  let NAV1 = document.getElementById("parts_NAV1");
  let NAV2 = document.getElementById("parts_NAV2");
  let NAV3 = document.getElementById("parts_NAV3");
  let menu = document.querySelector(".links");
  let navlinks = document.querySelectorAll(".links li");

  document.getElementById("NAV").addEventListener("click", () => {
    NAV1.classList.toggle("activeparts_NAV1");
    NAV2.classList.toggle("activeparts_NAV2");
    NAV3.classList.toggle("activeparts_NAV3");
    menu.classList.toggle("menuactive");
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfrade 500ms ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

navSlide();

// Hero

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n) {
  muestraSlides((indice += n));
}

function posicionSlide(n) {
  muestraSlides((indice = n));
}
setInterval(function tiempo() {
  muestraSlides((indice += 1));
}, 4000);
function muestraSlides(n) {
  let i;
  let slides = document.getElementsByClassName("miSlider");
  let barras = document.getElementsByClassName("barra");

  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < barras.length; i++) {
    barras[i].className = barras[i].className.replace(" active", "");
  }

  slides[indice - 1].style.display = "block";
  barras[indice - 1].className += " active";
}
