// Grab rows from from data.js
var tableData = data;
//select table element
var table = d3.select('table');
//stripe the table using bootstrap for readability
table.attr('class', 'table-striped')

//select table body in order to append new rows
var tbody = d3.select('tbody');

//append one new row for practice--may need to put into for loop?
var practiceRow = tbody.append('tr');

//append 7 new cells in this row for each data piece? 
// for(i = 0; i<8; i++){
//     var dataPractice = practiceRow.append('td');
//     dataPractice.text(data[0][datetime]);
// }

for(i = 0; i <8; i++){
    var row = tbody.append('tr');
    for(i = 0; i<8; i++){
        var cell = row.append('td');
        cell.text(tableData[0].city);
    }
    
}
console.log(tableData[0].city)