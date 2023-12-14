// 1 ir 2
const konteineris = document.querySelector("#pirmas")
const pirmasEl = document.createElement("p")
pirmasEl.textContent = "aaaaaaaaaaaaa"
const antrasEl = document.createElement("p")
antrasEl.textContent = "bbbbbbbbbbbbbb"
const treciasEl = document.createElement("p")
treciasEl.textContent = "cccccccccccccc"
const ketvirtasEl = document.createElement("p")
ketvirtasEl.textContent = "ddddddddddddd"
const penktasEl = document.createElement("p")
penktasEl.textContent = "eeeeeeeeeeeeee"

konteineris.append(pirmasEl, antrasEl, treciasEl, ketvirtasEl, penktasEl)

// 3
pirmasEl.setAttribute("class", "aaaa")
antrasEl.setAttribute("id", "bbbb")
ketvirtasEl.setAttribute("id", "dddd")
penktasEl.setAttribute("id", "eeee")

const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const div4 = document.createElement("div")
const div5 = document.createElement("div")
const div6 = document.createElement("div")

konteineris.append(div1, div2, div3, div4, div5, div6)

const bendras = konteineris.querySelectorAll("div")
bendras.forEach((el)=> {
    el.style.height = "50px"
    el.style.width = "40px"
})

const button = document.createElement("button")
konteineris.append(button)

button.innerText = "click"

button.addEventListener("click", (event)=>{
    event.preventDefault()

    bendras.forEach((el)=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        el.style.backgroundColor = "#" + randomColor;
    })
})
const random = ((array)=>{
    const ranIndex = Math.floor(Math.random() * array.length)
    console.log(ranIndex)
    return array[ranIndex]
    
})

const wordsConteiner =document.getElementById("words")
const masyvas = ["obuolys", "kriause", "apelsinas", "vynuoges", "bananai", "mandarinai"]
for (let i = 1; i<=masyvas.length; i++){
    const pElementai = document.createElement("li")
    const randomWord = random(masyvas)

    pElementai.innerText = randomWord

    wordsConteiner.appendChild(pElementai)
}
