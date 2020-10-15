let orang = {
  namaDepan: "Andi Aditya",
  namaBelakang: "Pratama",
  usia: "23",
};
orang.tahun = 1997;
document.getElementById("hasil").innerHTML = `Nama depan anda adalah ${orang.namaDepan}, nama belakang anda adalah ${orang.namaBelakang} dengan tahun ${orang.tahun}`;

// 
let pesan = "";
let id;
for(id in orang) {
  pesan = pesan + orang[id] + " ";
  console.log("id = " + id);
}
console.log(orang["namaDepan"])
const hasil2 = document.getElementById("hasil2");
hasil2.innerHTML = pesan;