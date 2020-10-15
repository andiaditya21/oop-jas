let orang = {
    namaDepan: "Andi Aditya",
    namaBelakang: "Pratama",
    usia: 23,
    namaLengkap: function () {
        return this.namaDepan + " " + this.namaBelakang;
    }
  };
  document.getElementById("namalengkap").innerHTML = orang.namaLengkap();

//   merubah objek menjadi array
let arrayOrang = Object.values(orang)
document.getElementById('array').innerHTML = arrayOrang[1];