// //Soal 1
// Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
// - apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. 
// - apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 




// //Soal 2
// Terdapat 5 data nama berikut ini: 
//     1. Budi 
//     2. Adi 
//     3. Gunawan 
//     4. Joko 
//     5. Bambang 
// Silahkan berikan kondisi ketika nama di atas diinputkan akan 
// mengeluarkan output "Boleh masuk!" dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!". 

// var input = prompt('Input Nama :','-Budi-','-Adi-','-Gunawan-','-Joko-','-Bambang-').toLocaleLowerCase;
// if (input === 'Budi') {
//     document.write('Boleh Masuk');
// } else if (input === 'Adi') {
//     document.write('Boleh Masuk');
// } else if (input === 'Gunawan') {
//     document.write('Boleh Masuk');
// } else if (input === 'Joko') {
//     document.write('Boleh Masuk');
// } else if (input === 'Bambang') {
//     document.write('Boleh Masuk');
// } else {
//     document.write('Tidak Boleh Masuk');
// }


// fungsi luas permukaan balok
function hitungLuasBalok (panjang,lebar,tinggi){
    return ((2 * (panjang * lebar)) + (2 * (tinggi * lebar)) + (2 * (panjang * tinggi)))
}

// fungsi volume balok
function hitungVolumeBalok (panjang,lebar,tinggi){
    var volume = panjang * lebar * tinggi
    return volumeBalok;
}

var menu = prompt('Silahkan pilih menu yang tersedia', '1 - luas , 2 - volume')
if (menu==1){
    var panjangBalok = parseInt(prompt('Masukkan panjang Balok : '))
    var lebarBalok = parseInt(prompt('Masukkan lebar Balok : '))
    var tinggiBalok = parseInt(prompt('Masukkan tinggi Balok : '))
    var panjang1 = panjangBalok
    var lebar1 = lebarBalok
    var tinggi1 = tinggiBalok
    var luas = hitungLuasBalok(panjang1,lebar1,tinggi1) // variabel penampung

    document.write('Luas Balok adalah : ' + luas);
} else if (menu==2){
    var panjangBalok = parseInt(prompt('Masukkan panjang Balok : '))
    var lebarBalok = parseInt(prompt('Masukkan lebar Balok : '))
    var tinggiBalok = parseInt(prompt('Masukkan tinggi Balok : '))
    var panjang1 = panjangBalok
    var lebar1 = lebarBalok
    var tinggi1 = tinggiBalok
    var volume = hitungVolumeBalok(panjang1,lebar1,tinggi1) // variabel penampung

    document.write('Volume Balok adalah : ' + volume);
} else {
    document.write('Menu yang Anda pilih tidak valid' + '<br>')
}
