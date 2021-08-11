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