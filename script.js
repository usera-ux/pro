function change(){
    document.body.classList.toggle('dark')
}

function opened(){
    document.querySelector('.login-card').style.display = 'block';
}
function closed(){
     document.querySelector('.login-card').style.display = 'none';
}

function closi(){
    let name = document.getElementById('inputname').value.trim()
    let num = document.getElementById('inputumber').value.trim()

    if(name === '' || num === ''){
        alert('you must write something');
    }else{
        alert('thanks for subscribing');
    }
}

let place = [];
fetch('data.json')
.then(function(res){
    return res.json();
})
.then(function(data){
    place = data;
    renderPlace(place);
})

function renderPlace(data){
    const container = document.getElementById('container');
    container.innerHTML = '';
    data.forEach( place =>{
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = 
        `<img src="${place.image}" alt="${place.name}" class="image-card">
        <h1>${place.name}</h1> 
        <p>${place.describe}<p/>
        `
        card.addEventListener('click',() => openModal(place));
        container.appendChild(card);
    });
    
}

document.getElementById('searchinput').addEventListener('input',function(){
    const searchtext = this.value.toLowerCase();
    const filtertext = place.filter(p =>
        p.name.toLowerCase().includes(searchtext)
    );
    renderPlace(filtertext);
})

function openModal(place){
    document.getElementById('modal-img').src = place.image;
    document.getElementById('modal-text').innerText= place.name;
    document.getElementById('modal').style.display = "flex"
}
function closeModal(){
    document.getElementById('modal').style.display = 'none'
}


const images = ['image copy 2.png','image copy 3.png','image copy 4.png','image copy 5.png',]
currentIndex = 0;

function showall(){
    const image = document.getElementById('image-carousel');
    image.src = images[currentIndex];
}
function prevslide(){
    currentIndex =(currentIndex - 1 + images.length) % images.length;
    showall(currentIndex)
}
function nextslide(){
    currentIndex =(currentIndex  + 1) % images.length;
    showall(currentIndex)
}


function toggleMenu(){
    const menu = document.getElementById('mobile');
    menu.classList.toggle('show');
}