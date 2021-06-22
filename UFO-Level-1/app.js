// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("table");
var form = d3.select("#filters")
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");


tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#filter-btn");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(date => date.datetime === inputValue);
  
    console.log(filteredData)
};
