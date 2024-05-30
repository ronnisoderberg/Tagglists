const XLSX = require('xlsx');
const fs = require('fs');

// Function to convert .xls to .xlsx
function convertXlsToXlsx(xlsFilename, xlsxFilename) {
    // Read the .xls file
    const xlsWorkbook = XLSX.readFile(xlsFilename, { type: 'binary' });

    // Create a new .xlsx file
    const xlsxWorkbook = XLSX.utils.book_new();

    // Copy each sheet from the .xls file to the .xlsx file
    xlsWorkbook.SheetNames.forEach(sheetName => {
        const xlsSheet = xlsWorkbook.Sheets[sheetName];
        XLSX.utils.book_append_sheet(xlsxWorkbook, xlsSheet, sheetName);
    });

    // Write the .xlsx file
    XLSX.writeFile(xlsxWorkbook, xlsxFilename);
}

// Function to read .xlsx file
function readXlsx(filename) {
    // Read the .xlsx file
    const workbook = XLSX.readFile(filename);

    // Loop through all sheets
    workbook.SheetNames.forEach(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        // Print the content of the first cell in each sheet
        // console.log(`Content of the first cell in sheet ${sheetName}: ${sheet['A1'].v}`);
        console.log("1");
    });
}

// Convert the first .xls file
convertXlsToXlsx('L070n087_SET_Export.xls', 'L070n087_SET_Export.xlsx');

// Read the converted .xlsx files
readXlsx('L070n087_SET_Export.xlsx');
readXlsx('L070n087_EDE.xlsx');
