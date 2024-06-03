import XLSX from 'xlsx';
import convertToXlsx from './convert.js';


// convertToXlsx('L070n087_EDE.xls', 'L070n087_EDE.xlsx');




function xlsxManipulering(filename) {
    // Read the .xlsx file
    const workbook = XLSX.readFile(filename);
    
    const table = XLSX.readFile(filename);
    const sheet = table.Sheets[table.SheetNames[0]];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    console.log(range.e.r);

    

}
xlsxManipulering('L070n087_EDE.xlsx');


