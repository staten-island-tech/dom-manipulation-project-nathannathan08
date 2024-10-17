const DOMSelectors = {

    header: document.querySelector("h1"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    container:document.querySelector(".container"),
    form:document.querySelector(".form"),
    removeButton:document.querySelector(".remove-btn"),
    };
    
let lastCard;

DOMSelectors.form.addEventListener("submit", function(event){

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

     event.preventDefault();
     console.log(document.querySelectorAll("input").value);
    
    
    // Update lastCard to the newly created card
    lastCard = DOMSelectors.container.querySelector(".card:last-child");
    console.log("New last card:", lastCard); // Debugging: Log the last card

    // Clear the input fields
    inputs.forEach(input => input.value = '');
});

// Add event listener for the Remove button
DOMSelectors.removeButton.addEventListener("click", function() {
    if (lastCard) {
        console.log("Deleting card:", lastCard); 
        lastCard.remove(); // Remove the last created card
        lastCard = DOMSelectors.container.querySelector(".card:last-child"); // Update lastCard reference
        console.log("New last card:", lastCard); // Debugging: Log the new last card
    } else {
        console.log("No card found."); // Debugging info
    }
});

//create the html for inputs, cards, and containers aka where card goes

//select slash query in html form and get values from inputs

//turn values into object Movie, Game, User, whatevs

//insert card with object onto HTML

//add event listener for remove button in js