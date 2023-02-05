const data_skill = [
    {skill:html, porcent:80},
    {skill:css, porcent:60},
    {skill:js, porcent:20},
    {skill:python, porcent:100},
    {skill:java, porcent:40},
]

const div= document.querySelector("box-k")
for (const i in data_skill) {
    const html_skill = 
    `
        <div class="skill">
            <div class="detalles">
              <span>${data_skill[i].skill}</span>
              <span>${data_skill[i].porcent}%</span>
            </div>
            <div class="barra">
              <div class="barra-${data_skill[i].porcent}"></div>
            </div>
        </div>
    `
    div.innerHTML += html_skill;
        
    
}
    const html_skill = 
    `
        <div class="skill">
            <div class="detalles">
              <span>{</span>
              <span></span>
            </div>
            <div class="barra">
              <div class="barra-20"></div>
            </div>
        </div>
    `
