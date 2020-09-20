
// Grab rows from from data.js
var tableData = data;
//select table element
var table = d3.select('table');
//stripe the table using bootstrap for readability

table.attr('class', 'table-striped')

//select table body in order to append new rows
var tbody = d3.select('tbody');


//add cities to their own column
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


