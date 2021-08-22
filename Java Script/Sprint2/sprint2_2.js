// fungsi menghitung luas dengan menggunakan function declaration
// boleh tidak memiliki nilai balik
// tidak menggunakan nilai balik
// segi empat (sisi * sisi)
// var luas = 'irfan'

function hitungluasSegiEmpat(sisi) {
    // tidak ada nilai balik
    var luas = sisi * sisi
    // document.write('Luas Segi Empat : ' + luas);
    return luas;
}
// segi panjang (panjang * lebar)
function hitungluasPersegiPanjang(panjang,lebar) {
    // tidak memiliki nilai balik
    var luas = panjang * lebar
    // document.write('Luas Persegi Panjang : ' + luas);
    return luas;
}
// menggunakan nilai balik
// segi tiga (0.5 * alas * tinggi)
function hitungluasSegiTiga(alas,tinggi) {
    var luas = 0.5 * alas * tinggi
    return luas;
}
// lingkarang (3.14 * jari-jari ^2)
function hitungluasLingkaran(jariJari) {
    return 3.14 * jariJari ^ 2
}

// fungsi menghitung keliling dengan mengguakan function expretion
// segi empat (sisi + sisi + sisi + sisi)
var hitungkelilingSegiEmpat = function(sisi){
    //return sisi + sisi + sisi + sisi;
    return sisi * 4;
}
// segi panjang (2 * (panjang + lebar))
var hitungkelilingPersegiPanjang = function(panjang,lebar) {
    return 2 * (panjang + lebar);
}
// segi tiga (alas + tinggi + sisi miring)
var hitungkelilingSegiTiga = function(alas,tinggi,sisiMiring) {
    return alas + tinggi + sisiMiring;
}
// lingkarang (2 * 3.14 * jari-jari)
var hitungkelilingLingkaran = function(jarJari) {
    return 2 * 3.14 * jarJari;
}

// Input dan output
// Luas
// Persegi (1 Variabel)
function luasPersegi() {
    var persegi = parseInt(prompt('Input sisi persegi : '))
    var luas = hitungluasSegiEmpat(persegi)
    document.write('Luas Segi Empat : ' + luas);
}
// Persegi Panjang (2 Variabel)
function luasPersegiPanjang() {
    var panjang = parseInt(prompt('Input panjang : '));
    var lebar = parseInt(promt('Input lebar : '));
    var luas = hitungluasPersegiPanjang(panjang,lebar);
    document.write('Luas Persegi Panjang : ' + luas);
}
// Segitiga (2 Variabel)
function luasSegitiga() {
    var alas = parseInt(prompt('Input alas : '));
    var tinggi = parseInt(promt('Input tinggi : '));
    var luas = hitungluasSegiTiga(alas,tinggi);
    document.write('Luas Segitiga : ' + luas);
}
// Lingkaran (1 variabel)
function luasLingkaran() {
    var jariJari = parseInt(prompt('Input Jari-Jari : '));
    var luas = hitungluasLingkaran(jariJari);
    document.write('Luas Lingkaran : ' + luas);
}

// Keliling
// Persegi (1 Variabel)
function kelilingSegiEmpat() {
    var sisi = parseInt(prompt('Input sisi : '));
    var keliling = hitungkelilingSegiEmpat(sisi);
    document.write('Keliling Segi Empat : ' + keliling);
}
// Persegi Panjang (2 Variabel)
function kelilingPersegiPanjang() {
    var panjang = parseInt(prompt('Input Panjang : '));
    var lebar = parseInt(prompt('Input Lebar : '));
    var keliling = hitungkelilingPersegiPanjang(panjang,lebar);
    document.write('Keliling Persegi Panjang : ' + keliling);
}
// Segitiga (3 Variabel)
function kelilingSegiTiga() {
    var alas = parseInt(prompt('Input Alas : '));
    var tinggi = parseInt(prompt('Input Tinggi : '));
    var sisiMiring = parseInt(prompt('Input Sisi Miring : '));
    var keliling = hitungkelilingSegiTiga(alas,tinggi,sisiMiring);
    document.write('Keliling Segitiga : ' + keliling);
}
// Lingkaran (1 Variabel)
function kelilingLingkaran() {
    var jariJari = parseInt(prompt('Input Jari-Jari : '));
    var keliling = hitungkelilingLingkaran(jariJari);
    document.write('Keliling Lingkaran : ' + keliling);
}


// Menu
var menu = prompt('Silakan pilih menu yang tersedia', '1 - Luas, 2 - Keliling')
if(menu==1){
    alert('Anda telah memilih menu luas bangun datar');
    var menuLuas = prompt('Masukkan bangun datar yang akan dihitung luasnya', '1 - Persegi; 2 - Persegi Panjang; 3 - Segitiga; 4 - Lingkaran')

    if(menu==1){
        // Luas Persegi
        luasPersegi();
    }else if(menuLuas==2){
        // Luas Persegi Panjang
        luasPersegiPanjang();
    }else if(menuLuas==3){
        // Luas Segitiga
        luasSegitiga();
    }else if(menuLuas==4){
        // Luas Lingkaran
        luasLingkaran();
    }else{
        document.write('Menu tidak tersedia');
    }
}else if(menu==2){
    alert('Anda telah memilih menu keliling bangun datar');
    var menuKeliling = prompt('Masukkan bangun datar yang akan dihitung kelilingnya', '1 - Persegi; 2 - Persegi Panjang; 3 - Segitiga; 4 - Lingkaran')

    if(menuKeliling==1){
        // Keliling Segi Empat
        kelilingSegiEmpat();
    }else if(menuKeliling==2){
        // Keliling Persegi Panjang
        kelilingPersegiPanjang();
    }else if(menuKeliling==3){
        // Keliling Segitiga
        kelilingSegiTiga();
    }else if(menuKeliling==4){
        // keliling Lingkaran
        kelilingLingkaran();
    }else{
        document.write('Menu tidak tersedia');
    }
}