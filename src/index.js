// write your code here

const fetchUrl = "http://localhost:3000/spiceblends"

const spiceMenu = document.getElementById('spice-images')
const spiceDetails = document.getElementById('spice-blend-detail')
spiceMenu.addEventListener('click', getSpiceInfo)
document.addEventListener('load', getSpice)


function getSpice(){
    fetch(fetchUrl)
    .then(response => response.json())
    .then(spiceData => {
        spiceData.forEach(spice => renderSpices(spice))
    })
}

function renderSpices(spice){
    const spiceImg = document.createElement('img')
    spiceImg.dataset.id= spice.id 
    spiceImg.className = 'spice-img'
    spiceImg.src = spice.image

    spiceMenu.append(spiceImg)
    
}

function getSpiceInfo(e){
    const ImgId = e.target.dataset.id 
    
    fetch(`${fetchUrl}/${ImgId}`)
    .then(response => response.json())
    .then(spiceDetails => displayDetails(spiceDetails))
}

function displayDetails(spice){
    const img = spiceDetails.querySelector('img')
    img.src = spice.image
}

getSpice()

