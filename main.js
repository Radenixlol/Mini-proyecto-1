const data_skill = [
    {skill:"html", porcent:"80"},
    {skill:"css", porcent:"60"},
    {skill:"js", porcent:"20"},
    {skill:"python", porcent:"100"},
    {skill:"java", porcent:"40"},
]
const div= document.querySelector(".box-k")
const htmlskill = () => {
data_skill.map(function(data_skill){
    let html_skill = `
        <div class="skill">
            <div class="detalles">
              <span>${data_skill.skill}</span>
              <span>${data_skill.porcent}%</span>
            </div>
            <div class="barra">
              <div class="barra-${data_skill.porcent}"></div>
            </div>
        </div>
    `
    div.innerHTML += html_skill;
           
})
 
}

htmlskill()