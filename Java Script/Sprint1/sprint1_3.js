// function cetak(bill1, bill2){
//     document.write('Tagihan pertama sebesar : Rp ' + bill1 + '<br>');
//     document.write('Tagihan kedua sebesar : Rp ' +  bill2 + '<br>');
// }
// cetak('300.000','500.000');

// var penjumlahan = function(angka1,angka2) {
//     return angka1 + angka2;
// }
// document.write(penjumlahan(5,7) + '<br>')


// literal declaration
var datamahasiswa = {
    //property
    nama : 'Irfan',
    nim : '1511500397',
    email : 'irmawanirfan3@gmail.com',

    //method
    getName: function() {
        console.log('Nama saya adalah ' + this.nama)
    },
    getNim: function() {
        console.log('Nim saya adalah ' + this.nim)
    },
    getEmail: function() {
        console.log('Email saya adalah ' + this.email)
    },
};

//constructor
function datamahasiswa(nama, nim, email) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
}
var datamahasiswa = new datamahasiswa('irfan','1511500397','irmawanirfan3@gmail.com')



//menjumlahkan volume 2 kubus
//1. ketahui sisi masing2 kubus 8 & 3
//2. hitung volume kubus a 8^3 = 512
//3. hitung volume kubus b 3^3 = 27
//4 jumlahkan hasilnya 512 + 27 = 
//5. kembalikan nila jawaban 539

// var sisiKubusA = parseInt(prompt("masukan sisi kubus a :"));
// var sisiKubusB = parseInt(prompt("masukan siki kubus b :"))

// function volumeKubus(sisi){
//     var volume
//     volume = sisi * sisi * sisi 
//     return volume

// }

// function jumlahVolumeKubus(a,b){
//     var total
//     var volumeKubusA
//     var volumeKubusB

//     volumeKubusA = a * a * a;
//     volumeKubusB = b * b * b;

//     total = a + b

//     return total
// }

//document.write(jumlahVolumeKubus(sisiKubusA,sisiKubusB))

// document.write('Sisi kubus a          : ' + sisiKubusA + "<br>");
// document.write('sisi kubus b          : ' + sisiKubusB + '<br>')
// document.write('Volume kubus a        :  ' + volumeKubus(sisiKubusA) + '<br>')
// document.write('Volume kubus b        : ' + volumeKubus(sisiKubusB) + '<br>')
// document.write('jumlah volume 2 kubus : ' + jumlahVolumeKubus(volumeKubus(sisiKubusA),volumeKubus(sisiKubusB)) + '<br>')