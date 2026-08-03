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


// =======================================================
// Tombol PROSES
// =======================================================

btnProses.addEventListener("click", async function () {

    try {

        const file = fileInput.files[0];

        await loadTemplateGuru(file);

await loadMesin();

testFormula();

alert("✔ Template valid.\nMesin berhasil dimuat.");

    } catch (err) {

    console.error(err);

    alert(err.message);

}

});
