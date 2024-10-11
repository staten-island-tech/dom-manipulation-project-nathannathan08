const DOMSelectors = {

    header: document.querySelector("h1"),
    items: document.querySelectorAll("li"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    container:document.querySelector(".container"),
    form:document.querySelector(".form"),
    };
    
    
//select all buttons as nodelist (can use for each)
    const buttons = document.querySelectorAll("button");
    //make an array from buttons if i want to use filterv etc.
const newButtons = Array.from(buttons);
//iterate through array and change each buttons color
newButtons.forEach((button)=> (button.style.backgroundColor = "blue"));

newButtons.forEach((button) => button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
})
);

DOMSelectors.form.addEventListener("submit", function(event){
    
     event.preventDefault();
     console.log(document.querySelectorAll("input").value);
    
    

const inputs = [...document.querySelectorAll(".form input")];
const gametitle = inputs[0].value;
const gamerelease = inputs[1].value;
const gameimage = inputs[2].value;


DOMSelectors.container.insertAdjacentHTML(
    "beforeend", 
    `<div class="card">
        <h2 class="card-header">${gametitle}</h2>
        <p>Release Date: ${gamerelease}</p>
        <img src="${gameimage}" alt="${gametitle} image" class="card-img" />
    </div>`
);

inputs.forEach(input => input.value = '');
});
//create the html for inputs, cards, and containers aka where card goes

//select slash query in html form and get values from inputs

//turn values into object Movie, Game, User, whatevs

//insert card with object onto HTML

//add event listener for remove button in js