// console.log("Hello world");
var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("create-pizza");
var options = document.getElementById("options");
var selection = document.getElementById("selection");

var currentStage = 0;
var stages = [
  {
    name: "Crust",
    options: ["Thin", "Hand Tossed", "Pan", "Deep Dish"],
  },
  {
    name: "Meats",
    options: ["Pepperoni", "Ham", "Sausage", "Beef", "Chicken"],
  },
  {
    name: "Veggies",
    options: ["Green Peppers", "Onions", "Tomatoes", "Banana Peppers"],
  },
];

/**
 * 
 * @param {*} array 
 * Takes in whatever array we pass in.
 * Preferably options for the current stage. 
 */
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

/**
 * Listens for the user to click on the options div.
 * If the target of the click matches a <button> el
 * We grab the data attribute of THAT button
 * Move to the next stage. 
 */
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

    if (currentStage === stages.length - 1) {
      alert("Your pizza is on its way!");
    } else {
      setTimeout(function () {
        currentStage++;
        var optionsToDisplay = stages[currentStage].options;
        options.textContent = "";
        renderOptions(optionsToDisplay);
      }, 1000);
    }
  }
});

/**
 * When the start button is clicked
 * Hide the welcome container
 * Call renderOptions
 */
startButton.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  var optionsToDisplay = stages[currentStage].options;
  renderOptions(optionsToDisplay);
});
