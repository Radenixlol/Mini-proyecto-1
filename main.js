
document.getElementById("NAV").addEventListener("click", animatebars)

let NAV1 = document.getElementById("parts_NAV1")
let NAV2 = document.getElementById("parts_NAV2")
let NAV3 = document.getElementById("parts_NAV3")

function animatebars(){
    NAV1.classList.toggle("activeparts_NAV1")
    NAV2.classList.toggle("activeparts_NAV2")
    NAV3.classList.toggle("activeparts_NAV3")

}