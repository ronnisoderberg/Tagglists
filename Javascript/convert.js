import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

// Function to convert .xls or .csv to .xlsx
export default function convertToXlsx(inputFilename, outputFilename) {
//  function convertToXlsx(inputFilename, outputFilename) {
    const ext = path.extname(inputFilename).toLowerCase();
    let workbook;

    if (ext === '.xls') {
        // Read the .xls file
        workbook = XLSX.readFile(inputFilename, { type: 'binary' });
    } else if (ext === '.csv') {
        // Read the .csv file
        const csvData = fs.readFileSync(inputFilename, 'utf-8');
        const sheet = XLSX.utils.csv_to_sheet(csvData);
        workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');
    } else {
        throw new Error('Unsupported file type');
    }

    // Write the .xlsx file
    XLSX.writeFile(workbook, outputFilename);
}





// Convert the first .xls file
// convertToXlsx('L070n087_SET_Export.xls', 'L070n087_SET_Export.xlsx');

// // Convert a CSV file
// convertToXlsx('example.csv', 'example.xlsx');

// // Read the converted .xlsx files
// readXlsx('L070n087_SET_Export.xlsx');
// readXlsx('example.xlsx');
// readXlsx('L070n087_EDE.xlsx');
