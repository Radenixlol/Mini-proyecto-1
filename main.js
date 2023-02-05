
const navSlide = () => {
    let NAV1 = document.getElementById("parts_NAV1")
    let NAV2 = document.getElementById("parts_NAV2")
    let NAV3 = document.getElementById("parts_NAV3")
    let menu = document.querySelector(".links")
    let navlinks = document.querySelectorAll(".links li")

    document.getElementById("NAV").addEventListener("click", () => {
        NAV1.classList.toggle("activeparts_NAV1")
        NAV2.classList.toggle("activeparts_NAV2")
        NAV3.classList.toggle("activeparts_NAV3")
        menu.classList.toggle("menuactive")
        navlinks.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation = ""
            } else{
                link.style.animation = `navlinkfrade 500ms ease forwards ${(index / 7)+ 0.5 }s`
            }
        })
    })
}

navSlide()