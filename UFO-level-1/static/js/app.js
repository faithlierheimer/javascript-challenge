
// Grab rows from from data.js
var tableData = data;
//select table element
var table = d3.select('table');
//stripe the table using bootstrap for readability
table.attr('class', 'table-striped')

//select table body in order to append new rows
var tbody = d3.select('tbody');


//add data to table, code dynamically so it can update as data.js updates.
//write function to generalize the process?
function buildTable(dataTable){
    for(let i = 0; i < dataTable.length; i++){
        var row = tbody.append('tr');
        var cellDate = row.append('td');
        var cellCity = row.append('td');
        var cellState = row.append('td');
        var cellCountry = row.append('td');
        var cellShape = row.append('td');
        var cellDuration = row.append('td');
        var cellComments = row.append('td');
        cellDate.text(dataTable[i].datetime); 
        cellCity.text(dataTable[i].city);
        cellState.text(dataTable[i].state);
        cellCountry.text(dataTable[i].country);
        cellShape.text(dataTable[i].shape);
        cellDuration.text(dataTable[i].durationMinutes);
        cellComments.text(dataTable[i].comments);
    };
    
};

//call function to build table
buildTable(tableData);

//select form itself--defined in the html
var form = d3.select('form');
//Select button that submits form-defined in the HTML
console.log(form)
//Create event handlers so Javascript knows what to do when button is 
//clicked/form is submitted 
form.on("submit", runEnter);

//define form submission function--e.g. what to do when form is submitted
function runEnter(){
     //prevent page from refreshing
    d3.event.preventDefault();
    //select input element, get raw html node
    var inputElement = d3.select('input');
    //grab value of input
    var inputValue = inputElement.property('value');
    console.log(inputValue)
    // //attempt to filter display table by input date
    var filtered = tableData.filter(tableData => tableData.datetime === inputValue);
    //check work, consolelog input value
    console.log(inputElement)
    console.log(filtered)
    //take out old data
    tbody.html("");
    //call build table function for filtered table
    buildTable(filtered);
}




