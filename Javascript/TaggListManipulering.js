import XLSX from 'xlsx';
import convertToXlsx from './convert.js';


// convertToXlsx('L070n087_EDE.xls', 'L070n087_EDE.xlsx');




function xlsxManipulering(filename) {
    
    const table = XLSX.readFile(filename);
    const sheet = table.Sheets[table.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet, {header: 1});





}
xlsxManipulering('L070n087_EDE.xlsx');


