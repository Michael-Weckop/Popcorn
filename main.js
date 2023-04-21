const PTRI = ['Allan', 'April', 'Arthur', 'Austin', 'Bruce', 'Bryan', 'Chuck', 'David', 'Davis', 'Derrick', 'Jay','Jeanine', 'John', 'Julia B.','Julia X', 'Julie', 'Junwen', 'Kahalia', 'Kevin', 'Chandler', 'Liam','Lisa','Lisandro', 'Matthew', 'Michael', 'Murat', 'Omid', 'Renee', 'Robert', 'Sean', 'Shi Yu', 'Thomas', 'Vicky', 'Will', 'Zai']

let button = document.getElementById('start');
let name = document.getElementById('name');

//Generate random cat image when clicking the start button
button.addEventListener('click', () => {
    let image = document.getElementById("cat-image");
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(json => image.src = json[0].url)
    setTimeout(() => {
        name.innerHTML = PTRI[randomIndex()];
    },500)
    
})

// function to create random number to target index in array of names
function randomIndex () {
    return Math.floor(Math.random() * PTRI.length);
}