// Grab rows from from data.js
var tableData = data;
//select table element
var table = d3.select('table');
//stripe the table using bootstrap for readability
table.attr('class', 'table-striped')

//select table body in order to append new rows
var tbody = d3.select('tbody');
