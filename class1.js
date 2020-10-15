class Mahasiswa {
    constructor(nim,namaDepan,namaBelakang,umur) {
        this.nim = nim;
        this.namaDepan = namaDepan;
        this.namaBelakang = namaBelakang;
        this.umur = umur;
    }
    get getNim() {
        return this.nim;
    }
    get getNamaDepan() {
        return this.namaDepan;
    }
    get getNamaBelakang() {
        return this.namaBelakang;
    }
    getNamaLengkap() {
        return `${this.namaDepan} ${this.namaBelakang}`;
    }

    get getUmur() {
        return this.umur;
    }
    tampil = () => {
        return this.getNamaLengkap()
    }
}

objMhs1 = new Mahasiswa('001', 'Andi', 'Aditya', 23);
const hasil = document.getElementById('hasil');
let dataMhs1 = `NIM= ${objMhs1.getNim} | Nama Depan= ${objMhs1.getNamaDepan} | Nama Belakang= ${objMhs1.getNamaBelakang} | Umur= ${objMhs1.getUmur}`;

objMhs2 = new Mahasiswa('002', 'Mega', 'Anita', 24);
let dataMhs2 = `<hr> NIM= ${objMhs2.getNim} | Nama Depan= ${objMhs2.getNamaDepan} | Nama Belakang= ${objMhs2.getNamaBelakang} | Umur= ${objMhs2.getUmur}`;
hasil.innerHTML = dataMhs1 + dataMhs2;
alert(objMhs1.tampil())