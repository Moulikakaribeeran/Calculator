
function CC() {
    document.getElementById("evaluate").value = "";
}
 
//Display function to display the numbers
function display(value) {
    document.getElementById("evaluate").value += value;
}
 


// Define an array to store the calculation history
var calculationHistory = [];

// Function to display a calculation in the history
function addToHistory(calculation) {
  calculationHistory.push(calculation);

  // Only keep the last 10 calculations
  if (calculationHistory.length > 10) {
    calculationHistory.shift(); 
  }

  // Update the history list in the HTML
  updateHistoryList();
}

// Function to update the history list in the HTML
function updateHistoryList() {
  var historyList = document.getElementById('history-list');
  historyList.innerHTML = '';

  calculationHistory.forEach(function (calculation) {
    var listItem = document.createElement('li');
    listItem.textContent = calculation;
    historyList.appendChild(listItem);
  });
}


function calculate() {
  var inputBox = document.getElementById('evaluate');
  var result = eval(inputBox.value);
  inputBox.value = result;

  
  addToHistory(inputBox.value);
}



