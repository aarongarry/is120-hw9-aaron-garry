// set one radio input to selected
document.querySelector("#tip15").checked = true;

// create variables
let inputBox = document.querySelector("#initialCost");
let initialCost = 0;
let tipPercent = 0.15;
let totalCost = 0;
let tipAmount = document.querySelector("#tipAmount");
let finalCost = document.querySelector("#finalCost");
let tip15 = document.querySelector("#tip15");
let tip18 = document.querySelector("#tip18");
let tip21 = document.querySelector("#tip21");
let tip24 = document.querySelector("#tip24");

// Functions
function setInitialCost() {
  initialCost = Number(inputBox.value);
}

function calculateTip() {
  let tipPercent = parseFloat(
    document.querySelector("input[name='tipPercent']:checked").value
  );
  let tip = initialCost * tipPercent;
  totalCost = initialCost + tip;
  tip = tip.toFixed(2);
  totalCost = totalCost.toFixed(2);
  tipAmount.textContent = "Tip amount:" + " " + "$" + tip;
  finalCost.textContent = "Total" + " " + "$" + totalCost;
}

// Event listeners
inputBox.addEventListener("input", setInitialCost);
inputBox.addEventListener("input", calculateTip)
tip15.addEventListener("change", calculateTip);
tip18.addEventListener("change", calculateTip);
tip21.addEventListener("change", calculateTip);
tip24.addEventListener("change", calculateTip);
