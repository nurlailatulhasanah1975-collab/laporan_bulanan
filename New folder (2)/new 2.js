// =======================================================
// LKH GENERATOR
// File : app.js
// Version : 0.1.0
// =======================================================

const fileInput = document.getElementById("templateFile");
const fileName = document.getElementById("fileName");
const btnProses = document.getElementById("btnProses");

fileInput.addEventListener("change", function () {

    if (this.files.length === 0) {
        fileName.textContent = "Belum ada file dipilih";
        btnProses.disabled = true;
        return;
    }

    const file = this.files[0];

    fileName.textContent = file.name;

    btnProses.disabled = false;

});