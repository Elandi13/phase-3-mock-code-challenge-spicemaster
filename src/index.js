// write your code here

const fetchUrl = "http://localhost:3000/spiceblends/1"

const spiceMenu = document.querySelector('#spice-blend-detail')

document.addEventListener('load', getSpice)
// console.log(spiceMenu)

function getSpice(){
    fetch(fetchUrl)
    .then(response => response.json())
    .then(console.log)
}

getSpice()

