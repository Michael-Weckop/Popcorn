const PTRI = ['Allan', 'April', 'Arthur', 'Austin', 'Bruce', 'Bryan', 'Chuck', 'David', 'Davis', 'Derrick', 'Jay', 'Jeanine', 'John', 'Julia B.', 'Julia X', 'Julie', 'Junwen', 'Kahalia', 'Kevin', 'Chandler', 'Liam', 'Lisa', 'Lisandro', 'Matthew', 'Michael', 'Murat', 'Omid', 'Renee', 'Robert', 'Sean', 'Shi Yu', 'Thomas', 'Vicky', 'Will', 'Zai']

let button = document.getElementById('start');
let name = document.getElementById('name');
let image = document.getElementById("cat-image");

//Generate random cat image when clicking the start button
button.addEventListener('click', () => {
    image.src = '';
    image.style.objectFit = 'cover';
    image.style.transitionDuration = '1s';
    image.style.rotate = '360deg';


    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(json => image.src = json[0].url)

    name.style.transitionDuration = '1s';
    name.style.fontSize = '55px';
    name.innerHTML = PTRI[randomIndex()];

    playMeow()

    setTimeout(() => {
        location.reload()
    }, 3000)
})

// function to create random number to target index in array of names
function randomIndex() {
    return Math.floor(Math.random() * PTRI.length);
}

function playMeow() {
    const audio = document.querySelector('audio');
    audio.play()
}
