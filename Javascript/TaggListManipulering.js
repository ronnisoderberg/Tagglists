import XLSX from 'xlsx';
import convertToXlsx from './convert.js';


convertToXlsx('L070n087_EDE.xls', 'L070n087_EDE.xlsx');




function readXlsx(filename) {
    // Read the .xlsx file
    const workbook = XLSX.readFile(filename);
    

    // Loop through all sheets
    workbook.SheetNames.forEach(sheetName => {
        let excelRowsObjArr = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[she]);
        const sheet = workbook.Sheets[sheetName];
        // Print the content of the first cell in each sheet
        console.log(`Content of the first cell in sheet ${sheetName}: ${sheet['C8'].v}`);
    });
    

}
readXlsx('L070n087_EDE.xlsx');


