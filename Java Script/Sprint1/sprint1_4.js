// Case Study 1
// var bilangan1 = parseInt(prompt('Input bilangan pertama'));
// var bilangan2 = parseInt(prompt('Input bilangan kedua'));
// buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.

// versi pakai fungsi
// function penjumlahan(x,y){
//     return x + y;
//     document.write('Hasil penjumlahan dari x + y = ' + (bilangan1 + bilangan2 + '<br>');
//     var z = x + y;
//     return z;
// }

// function pengurangan(x,y) {
//     return x - y;
//     var hasilkurang = x-y;
//     document.write('Hasil pengurangan dari x - y = ' + hasilkurang + '<br>');
//     var z = x - y;
//     return z;
// }

// var perkalian = function name(x,y) {
//     return x * y;
//     var z = x * y;
//     return z;
// }

// var pembagian = function(x,y) {
//     return x / y;
//     var z = x / y;
//     return z;
// }

// function sisaPembagian(x,y) {
//     return x % y;
// }

// //tambah();
// //kurang(bilangan1, bilangan2);

// document.write('Hasil penjumlahan dari x + y = ' + penjumlahan(bilangan1, bilangan2) + '<br>');
// document.write('Hasil pengurangan dari x - y = ' + pengurangan(bilangan1, bilangan2) + '<br>');
// document.write('Hasil perkalian dari x * y = ' + perkalian(bilangan1, bilangan2) + '<br>');
// document.write('Hasil pembagian dari x / y = ' + pembagian(bilangan1, bilangan2) + '<br>');
// document.write('Hasil sisa pembagian dari x % y = ' + sisaPembagian(bilangan1, bilangan2) + '<br>')



// Case Study 2
function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = 0 - 20
    */

    if (nilai > 80 && nilai <= 100) {
        return console.log("A");
    } else if (nilai > 60 && nilai <= 80) {
        return console.log("B");
    } else if (nilai > 40 && nilai <= 60) {
        return console.log("C");
    } else if (nilai > 20 && nilai <= 40) {
        return console.log("D");
    } else if (nilai >= 0 && nilai <= 20) {
        return console.log("E");
    } else {
        return console.log("Nilai tidak valid")
    }
}

/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/

nilaiPeserta(5);
nilaiPeserta(60.5);
nilaiPeserta(39.5);
nilaiPeserta(50);
nilaiPeserta(101);

// var nilaiPeserta = parseInt(prompt("Input nilai peserta"));
// switch (true) {
//     case nilaiPeserta > 80 && nilaiPeserta <= 100:
//         document.write('Grade A')
//         break
//     case nilaiPeserta > 60 && nilaiPeserta <= 80:
//         document.write('Grade B')
//         break
//     case nilaiPeserta > 40 && nilaiPeserta <= 60:
//         document.write('Grade C')
//         break
//     case nilaiPeserta > 20 && nilaiPeserta <= 40:
//         document.write('grade D')
//         break
//     case nilaiPeserta >= 0 && nilaiPeserta <= 20:
//         document.write('grade E')
//         break
//     default :
//         document.write('tidak lulus')
// }

// var hasil = nilaiPeserta(5);
// var input = prompt('Input nilai akhir : ');
// document.write(hasil + '<br>');
// document.write(nilaiPeserta(60.5) + '<br>');
// document.write(nilaiPeserta(39.5) + '<br>');
// document.write(nilaiPeserta(50) + '<br>');
// document.write(nilaiPeserta(101) + '<br>');



// Case Study 3
function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */

        if (nilai > 80 && nilai <= 100) {
            return "A";
        } else if (nilai > 60 && nilai <= 80) {
            return "B";
        } else if (nilai > 40 && nilai <= 60) {
            return "C";
        } else if (nilai > 20 && nilai <= 40) {
            return "D";
        } else if (nilai >= 0 && nilai <= 20) {
            return "E";
        } else {
            return "Nilai tidak valid";
        }
}

var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(55.5)],
    ["Andika", 70.1, nilaiPeserta(70.1)],
    ["Alif", 19, nilaiPeserta(19)],
    ["Vista", 102, nilaiPeserta(102)]
];

//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.

for (var i = 0, l1 = dataSiswa.length; i < l1; i++) {
    for (var j = 0, l2 = dataSiswa[i].length; j < l2; j++) {
        document.write(dataSiswa[i][j], '<br>')
    }
}