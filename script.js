// console.log("Hello world");
var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("create-pizza");
var options = document.getElementById("options");
var selection = document.getElementById("selection");

startButton.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  renderOptions(availableCrusts);
});

var availableCrusts = ["Thin", "Hand Tossed", "Pan", "Deep Dish"];
var availableMeats = ["Pepperoni", "Ham", "Sausage", "Beef", "Chicken"];


function renderOptions(array) {
  

  for (var i = 0; i < array.length; i++) {
    // 1. Create an element.
    var button = document.createElement("button");
    // 2. Add content
    button.setAttribute("class", "btn btn-info");
    button.textContent = array[i];
    button.setAttribute("data-value", array[i]);
    // 3. Append to an existing element
    options.append(button);
  }
}

options.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("You clicked a button");
    var selectedCrust = event.target.getAttribute("data-value");
    console.log(selectedCrust);

    selection.textContent = "";
    var crustToDisplay = document.createElement("h3");
    crustToDisplay.textContent = selectedCrust;
    selection.append(crustToDisplay);
    // TODO: Save to Local Storage
    setTimeout(function(){
        options.textContent = "";
        renderOptions(availableMeats);
    }, 1000)
  }
});
