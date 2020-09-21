
// Grab rows from from data.js
var tableData = data;
//select table element
var table = d3.select('table');
//stripe the table using bootstrap for readability

table.attr('class', 'table-striped')

//select table body in order to append new rows
var tbody = d3.select('tbody');


//add data to table, code dynamically so it can update as data.js updates.
for(let i = 0; i < tableData.length; i++){
    var row = tbody.append('tr');
    var cell = row.append('td');
    var cellCity = row.append('td');
    var cellState = row.append('td');
    var cellCountry = row.append('td');
    var cellShape = row.append('td');
    var cellDuration = row.append('td');
    var cellComments = row.append('td');
    cell.text(tableData[i].datetime); 
    cellCity.text(tableData[i].city);
    cellState.text(tableData[i].state);
    cellCountry.text(tableData[i].country);
    cellShape.text(tableData[i].shape);
    cellDuration.text(tableData[i].durationMinutes);
    cellComments.text(tableData[i].comments);
}

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
    var table = d3.select('table');
//select table body in order to append new rows
    var tbody = d3.select('tbody');
    for(let i = 0; i < filtered.length; i++){
        var row = tbody.append('tr');
        var cell = row.append('td');
        var cellCity = row.append('td');
        var cellState = row.append('td');
        var cellCountry = row.append('td');
        var cellShape = row.append('td');
        var cellDuration = row.append('td');
        var cellComments = row.append('td');
        cell.text(filtered[i].datetime); 
        cellCity.text(filtered[i].city);
        cellState.text(filtered[i].state);
        cellCountry.text(filtered[i].country);
        cellShape.text(filtered[i].shape);
        cellDuration.text(filtered[i].durationMinutes);
        cellComments.text(filtered[i].comments);
    }
}

