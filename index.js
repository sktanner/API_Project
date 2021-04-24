const baseURL = "https://ghibliapi.herokuapp.com/people"

fetch(baseURL)
.then(res => res.json())
.then(json => {
    console.log(json)
    displayFilms(json)
})

const displayFilms = (films) => {
const wrapper = document.getElementById("col-sm")

for (let film of films){

let card = document.createElement("div")
let card_col = document.createElement("div")
let card_title = document.createElement("h5")
let card_body = document.createElement("div")
let card_image = document.createElement("img")
let filmName = film.films
let filmNameVar

fetch(filmName)
    .then(res => res.json())
    .then(json => {
    filmNameVar = json.title

card.className = "card"
card_col.className = "col-sm"
card_title.className = "card-title"
card_body.className = "card-body"
card_image.className = "card-img-top"

card_title.innerText = `${film.name}`
card_body.innerText = 
`Film: ${filmNameVar}
Gender: ${film.gender}
Age: ${film.age}
Eye Color: ${film.eye_color}
Hair Color: ${film.hair_color}`

card.appendChild(card_image)
card.appendChild(card_col)
card.appendChild(card_title)
card.appendChild(card_body)
wrapper.appendChild(card)


    switch (film.name) {
        case "Pazu":
            card_image.src = "./assets/Pazu.jpg";
            break
        case "Lusheeta Toel Ul Laputa":
            card_image.src = "./assets/Sheeta.jpg";
            break
        case "Ashitaka":
            card_image.src = "./assets/Ashitaka.jpg";
            break
        case "Jiji":
            card_image.src = "./assets/jiji.png";
            break
        case "Satsuki Kusakabe":
            card_image.src = "./assets/satsuki.png";
            break
        case "Niya":
            card_image.src = "./assets/niya.jpg";
            break
        case "Cat King":
            card_image.src = "./assets/catking.jpg";
            break
        case "Renaldo Moon aka Moon aka Muta":
            card_image.src = "./assets/muta.jpg";
            break
        case "Baron Humbert von Gikkingen":
            card_image.src = "./assets/Humbert.jpg";
            break
        case "Sosuke":
            card_image.src = "./assets/sosuke.jpg";
            break
        case "Porco Rosso":
            card_image.src = "./assets/porco.jpg";
            break
        case "San":
            card_image.src = "./assets/San.jpg";
            break
        case "Mei Kusakabe":
            card_image.src = "./assets/mei.jpg";
            break
        case "Yuki":
            card_image.src = "./assets/yuki.jpg";
            break
        case "Dola":
            card_image.src = "./assets/dola.jpg";
            break
        case "Eboshi":
            card_image.src = "./assets/eboshi.jpg";
            break
        case "Tatsuo Kusakabe":
            card_image.src = "./assets/tatsuo.jpg";
            break
        case "Haru":
            card_image.src = "./assets/haru.jpg";
            break
        case "Jigo":
            card_image.src = "./assets/jigo.jpg";
            break
        case "Romska Palo Ul Laputa":
            card_image.src = "./assets/romska.jpg";
            break
        case "Yasuko Kusakabe":
            card_image.src = "./assets/yasuko.jpg";
            break
        case "Natori":
            card_image.src = "./assets/natori.jpg";
            break
        case "Kohroku":
            card_image.src = "./assets/kohroku.jpg";
            break
        case "Granny":
            card_image.src = "./assets/granny.jpg";
            break
        case "Gonza":
            card_image.src = "./assets/Gonza.jpg";
            break
        case "General Muoro":
            card_image.src = "./assets/General_Muoro.jpg";
            break
        case "Uncle Pom":
            card_image.src = "./assets/Uncle_Pom.png";
            break
        case "Kanta Ogaki":
            card_image.src = "./assets/Kanta.jpg";
            break
        case "Hii-sama":
            card_image.src = "./assets/Hii-sama.jpg";
            break
        case "Duffi":
            card_image.src = "./assets/duffi.jpg";
            break
        case "Totoro":
            card_image.src = "./assets/totoro.jpg";
            break
        case "Chu Totoro":
            card_image.src = "./assets/chu_totoro.jpg";
            break
        case "Chibi Totoro":
            card_image.src = "./assets/chibi_totoro.jpg";
            break
        case "Yakul":
            card_image.src = "./assets/Yakul.jpg";
            break
        case "Louis":
            card_image.src = "./assets/louis.jpg";
            break
        case "Shishigami":
            card_image.src = "./assets/Shishigami.jpg";
            break
        case "Charles":
            card_image.src = "./assets/charles.jpg";
            break
        case "Moro":
            card_image.src = "./assets/Moro.jpg";
            break
        case "Catbus":
            card_image.src = "./assets/catbus.jpeg";
            break
        case "Colonel Muska":
            card_image.src = "./assets/romska.jpg";
            break
        case "Henri":
            card_image.src = "./assets/henri.jpg";
            break
        case "Motro":
            card_image.src = "./assets/motro.jpg";
            break
        case "Okami":
            card_image.src = "./assets/Okami.jpg";
            break
    }
})
}}