import XLSX from 'xlsx';
import convertToXlsx from './convert.js';


// convertToXlsx('L070n087_EDE.xls', 'L070n087_EDE.xlsx');




function xlsxManipulering(filename) {
    // Read the .xlsx file
    

    //Number of rows in the sheet
    const table = XLSX.readFile(filename);
    const sheet = table.Sheets[table.SheetNames[0]];



    const data = XLSX.utils.sheet_to_json(sheet, {header: 1});

    //Loop through the data and print the value 
    for (let i = 7; i < data.length; i++) {

        //Printar välrden på namnet
        console.log(data[i][2]);
    }




}
xlsxManipulering('L070n087_EDE.xlsx');


