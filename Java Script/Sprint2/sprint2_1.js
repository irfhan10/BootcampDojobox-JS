// var tinggiPria = parseInt(prompt('Input tinggi pria dalam satuan CM : '));
// var tinggiWanita = parseInt(prompt('Input tinggi wanita dalam satuan CM :'));

// function beratBadanPria(idealPria) {
//     var hasil1 = (idealPria - 100) - ((idealPria - 100) * (10/100));
//     return hasil1;
// }

// function beratBadanWanita(idealWanita) {
//     var hasil2 = (idealWanita - 100) - ((idealWanita - 100) * (15/100));
//     return hasil2;
// }

// document.write('Berat badan ideal pria untuk tinggi : '  + tinggiPria, ' sentimeter adalah ' + beratBadanPria(tinggiPria), ' kilogram' + '<br>');
// document.write('Berat badan ideal wanita untuk tinggi : ' + tinggiWanita, ' sentimeter adalah ' + beratBadanWanita(tinggiWanita), ' kilogram' + '<br>');

function nilaiPeserta (nilai) {
        var result;
    
        switch(true){
            case (nilai >= 81 && nilai <= 100):
                result = 'A';
                break;
            case (nilai >= 61 && nilai <= 80):
                result = 'B';
                break;
            case (nilai >= 41 && nilai <= 60):
                result = 'C';
                break;
            case (nilai >= 21 && nilai <= 40):
                result = 'D';
                break;
            case (nilai <= 20):
                result = 'E';
                break;
            default:
                result = 'Maaf inputan anda salah';
        }
    
        return result;
}

var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(55.5)],
    ["Andika", 70.1, nilaiPeserta(70.1)],
    ["Alif", 19, nilaiPeserta(19)],
    ["Vista", 102, nilaiPeserta(102)]
];

var penampung = ["Nama","Nilai","Rank"];

//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.
for(var i = 0;i < dataSiswa.length; i++){
    for(var j = 0; j < dataSiswa[i].length; j++){
        document.write(`${penampung[j]} : ${dataSiswa[i][j]} <br>`);
    }
    document.write('<br>');
}


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
]; //datasiswa[1][0] => andika

//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.

for (var i = 0, l1 = dataSiswa.length; i < l1; i++) {
    for (var j = 0, l2 = dataSiswa[i].length; j < l2; j++) {
        if(j==0){
            document.write('Nama : ' + dataSiswa[i][j], '<br>')
        }
        if(j==1){
            document.write('Nilai angka : ' + dataSiswa[i][j], '<br>')
        }
        if(j==2){
            document.write('Nilai huruf : ' + dataSiswa[i][j], '<br>')
        }
    }
}