// console.log("Hello world");
var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("create-pizza");
var crustOptions = document.getElementById("crust-options");
var crustSelection = document.getElementById("crust-selection");

startButton.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  renderCrustOptions();
});

function renderCrustOptions() {
  var availableCrusts = ["Thin", "Hand Tossed", "Pan", "Deep Dish"];

  for (var i = 0; i < availableCrusts.length; i++) {
    // 1. Create an element.
    var button = document.createElement("button");
    // 2. Add content
    button.setAttribute("class", "btn btn-info");
    button.textContent = availableCrusts[i];
    button.setAttribute("data-value", availableCrusts[i]);
    // 3. Append to an existing element
    crustOptions.append(button);
  }
}

crustOptions.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("You clicked a button");
    var selectedCrust = event.target.getAttribute("data-value");
    console.log(selectedCrust);
    
    crustSelection.textContent = "";
    var crustToDisplay = document.createElement("h3");
    crustToDisplay.textContent = selectedCrust;
    crustSelection.append(crustToDisplay);

  }
});
