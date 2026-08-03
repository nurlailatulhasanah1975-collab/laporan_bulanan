// ======================================================
// LKH GENERATOR
// File : excel.js
// Version : 0.2.0
// ======================================================

let workbookGuru = null;
let workbookMesin = null;


// ----------------------------
// Membaca Template Guru
// ----------------------------
function loadTemplateGuru(file){

    return new Promise((resolve,reject)=>{

        const reader = new FileReader();

        reader.onload = function(e){

            try{

                workbookGuru = XLSX.read(
                    e.target.result,
                    { type:"array" }
                );

                resolve();

            }catch(err){

                reject(err);

            }

        };

        reader.onerror = reject;

        reader.readAsArrayBuffer(file);

    });

}


// ----------------------------
// Membaca mesin.xlsx
// ----------------------------
async function loadMesin(){

    const response = await fetch("template/mesin.xlsx");

    if(!response.ok){

        throw new Error("mesin.xlsx tidak ditemukan");

    }

    const buffer = await response.arrayBuffer();

    workbookMesin = XLSX.read(
        buffer,
        { type:"array" }
    );

}
