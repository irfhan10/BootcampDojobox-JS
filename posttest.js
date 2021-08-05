// Soal A.
// Buatlah sebuah program untuk membantu seorang pustakawan dalam mengelola sebuah rak dengan ketentuan sebagai berikut :
// 1. Membuat pilihan menu dimana pustakawan bisa menambah buku, meminjamkan buku, mengembalikan buku, dan mengganti buku.
// 2. Membuat sebuah rak dengan array yang memuat 5 buku. Lalu dengan menggunakan function, tambahkan 5 buku dengan judul bebas.
// 3. Membuat sebuah function yang memungkinkan pustakawan meminjam buku dimana apabila terdapat buku yang dipinjam, 
// tempat yang ditinggalkan buku tersebut dibiarkan kosong. Berikut ilustrasinya
// 4. Membuat function untuk mengembalikan buku sesuai dengan rak kosong seperti ilustrasi sebelumnya.
// 5. Membuat sebuah function yang memungkinkan pustakawan mengganti koleksi buku yang sudah ada. Berikut ilustrasinya.

// var rakBuku = [];
// rakBuku = ['BukuA', 'BukuB', 'BukuC', 'BukuD', 'BukuE']

// document.write(typeof(rakBuku) + '<br>')
// document.write(rakBuku);
// document.write('<br>');

// rakBuku.push('BukuF')
// rakBuku.push('BukuG')
// rakBuku.push('BukuH')
// rakBuku.push('BukuI')
// rakBuku.push('BukuJ')
// rakBuku.push('BukuH')
// rakBuku.pop()
// document.write(rakBuku.join('<br>'))


// Soal B
// Buatlah sebuah program pembelian elektronik sederhana dengan ketentuan sebagai berikut :
// 1. Terdapat array yang digunakan untuk menyimpan data barang elektronik. Silahkan isi array dengan 5 jenis barang (bebas)
// 2. Terdapat 4 macam inputan yaitu, Nama barang, Jumlah barang, Harga barang, dan Discount
// 3. Output yang diharapkan dari program ini adalah sebagai berikut
// 4. Apabila Nama barang yang diinputkan oleh user tidak ada didalam array, maka output yang diharapkan adalah sebagai berikut

// var elektronik = [];
// elektronik = ['tv', 'kulkas', 'radio', 'laptop', 'hp']

// var namaBarang = prompt("input nama barang : ");
// var hargaBarang = prompt("input harga barang : ");
// var jmlBarang = prompt("input jumlah barang : ");
// var discount = prompt("input discount : ");
// var total = jmlBarang * hargaBarang - discount;

// document.write('Nama barang :' + namaBarang + '<br>');
// document.write('Harga :' + hargaBarang + '<br>');
// document.write('Jumlah : ' + jmlBarang + '<br>');
// document.write('Discount 40% :' + discount + '<br>');
// document.write('Total : ' + total + '<br>');
