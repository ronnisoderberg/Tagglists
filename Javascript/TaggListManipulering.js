import XLSX from 'xlsx';
import convertToXlsx from './convert.js';
import promptSync from 'prompt-sync';


// convertToXlsx('L070n087_EDE.xls', 'L070n087_EDE.xlsx');




function xlsxManipulering(edeFile, exportFile) {
    // Read the .xlsx file
    

    //Number of rows in the sheet
    const edeFile_workBook = XLSX.readFile(edeFile);
    const sheet = edeFile_workBook.Sheets[edeFile_workBook.SheetNames[0]];

    const exportFile_workBook = XLSX.readFile(exportFile);
    const sensors_sheet = exportFile_workBook.Sheets[exportFile_workBook.SheetNames[0]];
    const knobs_sheet = exportFile_workBook.Sheets[exportFile_workBook.SheetNames[1]];
    
    
    
    const edeData = XLSX.utils.sheet_to_json(sheet, {header: 1});
    const sensorsData = XLSX.utils.sheet_to_json(sensors_sheet, {header: 1});
    const knobsData = XLSX.utils.sheet_to_json(knobs_sheet, {header: 1});
    
    
    const aKolum = [];
    const bKolum = [];
    const cKolum = [];
    const dKolum = [];
    const eKolum = [];
    const fKolum = [];
    const gKolum = [];
    const hKolum = [];
    const iKolum = [];
    const jKolum = [];
    const kKolum = [];
    const sensorUnits = []
    const knobsUnits = []


    //TODO - Sätt på promten när koden är i produktion
    // även på rad 71
    const prompt = promptSync(); 
    const ducName = prompt('Namen på DUCen?: ');
    const ducNamn = ducName.toUpperCase();

    

    
    //Loop through the data and print the value 
    for (let i = 7; i < edeData.length; i++) {
        //A - Kolumnen
        //Sätter in data i en array för alla namnen
        aKolum.push(edeData[i][2]);

        //B - Kolumnen
        //Sätter vilken type som taggen har. 
        if (edeData[i][3] === 0) { bKolum.push("REAL"); }
        if (edeData[i][3] === 2) { bKolum.push("DIGITAL"); }
        if (edeData[i][3] === 3) { bKolum.push("REAL"); }
        if (edeData[i][3] === 5) { bKolum.push("DIGITAL"); }
        if (edeData[i][3] === 4) { bKolum.push("DIGITAL"); }
        if (edeData[i][3] === 17) { bKolum.push("STRING"); }

        //C - Kolumnen
        //Sätter DCU namnet på taggen
        cKolum.push(ducNamn);

        //D - Kolumnen
        //Sätter rätt förkortning på taggen. Sensors/S, Digins/I, Knobs/K, Switchar/W, samt vilket nummer den ska ha baserat på vad "object-instanse" är

        if (edeData[i][3] === 0) { 
            dKolum.push("S" + edeData[i][4] + "/V");
        } else if (edeData[i][3] === 3) { 
            dKolum.push("I" + edeData[i][4] + "/S");
        } else if (edeData[i][3] === 2) { 
            dKolum.push("K" + edeData[i][4] + "/V");
        } else if (edeData[i][3] === 5) { 
            dKolum.push("W" + edeData[i][4] + "/S");
        } else {
            dKolum.push("");
        }

        //E - Kolumnen
        //Nu ska en hämtning från "LxxnxxSET_Export.xls" göras
        //Gör en jävla refactorering, detta går på tok för långsamt.
        //Samlar ihop alla enheter för sensorer och knobs, så att man kan få värdena som ska visasa, samt rawmin/rawmax.
        // Sätter inte värdet till E-kolumenn här. 
        

        debugger
        if (dKolum[i-7].charAt(0) === "S" ||  dKolum[i-7].charAt(0) === "K") {



            for (let j = 0; j < sensorsData.length; j++) {
                if (sensorsData[j][3] === 0)  {
                    eKolum.push("0");
                } else if (sensorsData[j][3] === "x") {
                    eKolum.push("-500");
                } else if (sensorsData[j][3] === "min" || sensorsData[j][3] === "sec" || sensorsData[j][3] === "h" || sensorsData[j][3] === "kPa" || sensorsData[j][3] === "Pa" || sensorsData[j][3] === "sek" || sensorsData[j][3] === "MWh" || sensorsData[j][3] === "kW" || sensorsData[j][3] === "K" || sensorsData[j][3] === "s" || sensorsData[j][3] === "ppm" || sensorsData[j][3] === "A" || sensorsData[j][3] === "V" || sensorsData[j][3] === "kWh" || sensorsData[j][3] === "W" || sensorsData[j][3] === "dagar" || sensorsData[j][3] === "Nm") {
                    eKolum.push("0");
                } else if (sensorsData[j][3] === "°C") {
                    eKolum.push("-40");
                } else if (sensorsData[j][3] === "%" || sensorsData[j][3] === "%RH") {
                    eKolum.push("-10");
                } else if (sensorsData[j][3] === "l/s" || sensorsData[j][3] === "m³/h" || sensorsData[j][3] === "l/h" || sensorsData[j][3] === "g/kg" || sensorsData[j][3] === "m³ h" || sensorsData[j][3] === "m³" || sensorsData[j][3] === "m³/s" || sensorsData[j][3] === "rpm" || sensorsData[j][3] === "Hz") {
                    eKolum.push("-10000");
                } else if (sensorsData[j][3] === "bar") {
                    eKolum.push("0");
                } else {
                    eKolum.push("not in list");
                }
            }
            
        }
        else eKolum.push("");
            // for (let j = 0; j < knobsData.length; j++) {
        //     if (edeData[i][2] === knobsData[j][2]){
        //         knobsUnits.push(knobsData[j][3]);
        //     }
        // }
        // console.log(typeof edeData[i][3]);
    }
    for (let i =0; i < bKolum.length; i++) {
        console.log("RAD NR ", i+8 +" --- "+ aKolum[i] + ", " + bKolum[i] + ", " + cKolum[i] + ", " + dKolum[i] + ", " + eKolum[i]);
    }
    console.log("Sensors: ", sensorsData.length);
    console.log(edeData.length);
    

}
xlsxManipulering('L070n087_EDE.xls', 'L070n087_SET_Export.xls');


