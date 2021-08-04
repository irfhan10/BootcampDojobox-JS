// // // // alert('Selamat datang di kelas ini ...');
// // // //var nama = prompt('Masukkan nama anda : ');
// // // //document.write('Selamat datang kak irfan ' +
// // // //'<br>' );
// // // //document.write('Silakan belajar dengan penuh semangat...!!! ' +
// // // //'<br>' ); *

// // // var namaVariabel = '1234';
// // // //document.write(typeof(namaVariabel)+ '<br>');
// // // namaVariabel = 1234;
// // // //document.write(typeof(namaVariabel)+ '<br>');
// // // namaVariabel = true;

// // // var namaPengunjung = prompt("Silakan masukkan nama kamu", "dojobers setia");
// // // document.write('Hallo' + namaPengunjung
// // // + ', Selamat datang di dojobox.id' +  '<br>');

// // // var konfirmasi = confirm("Mau stay di sini kah?")
// // // var hasil = (konfirmasi==true)? "Iya" : "Tidak"
// // // document.write(hasil + "<br>")

// // // var angka = parseInt(prompt("Input angka :"));
// // // if(angka>50) {
// // //     document.write("input angka lebih dari 50");
// // // }

// // var nama = prompt("input nama : ");
// // if(nama=='irfan'){
// //     document.write('mahasiswa')
// // }else{
// //     document.write('nama yg di input bukan irfan')
// // }

/*var nilai = prompt('input angka : ');
if(nilai % 2 ==0){
    document.write(nilai + '<br>','merupakan bilangan genap')
} else if (nilai % 2 ==1){
    document.write(nilai + '<br>','merupakan bilangan ganjil')
} else {
    document.write(nilai + '<br>','bukan bilangan')
}*/

/*var nilaiRating = parseInt(prompt("Input rating",'0-5'));
switch (nilaiRating) {
    case '0':
        document.write('saya tidak puas')
        break
    case '1':
        document.write('saya tdak puas')
        break
    case '2':
        document.write('saya cukup puas')
        break
    case '3':
        document.write('saya cukup puas')
        break
    case '4':
        document.write('saya puas')
        break
    case '5':
        document.write('saya sangat puas')
        break
    default :
        document.write('terima kasih')
} */

var nilaiKelulusan = parseInt(prompt("Input nilai kelulusan",'0-100'));
switch (true) {
    case nilaiKelulusan >= 90:
        document.write('Grade A')
        break
    case nilaiKelulusan >= 80:
        document.write('Grade B')
        break
    case nilaiKelulusan >= 70:
        document.write('Grade C')
        break
    case nilaiKelulusan >= 60:
        document.write('grade D')
        break
    case nilaiKelulusan >= 50:
        document.write('grade E')
        break
    default :
        document.write('tidak lulus')
}