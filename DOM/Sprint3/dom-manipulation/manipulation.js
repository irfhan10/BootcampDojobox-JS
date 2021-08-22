// Element Manipulation
//element.innerHTML --> mengubah isi dari tag yang sudah dipilih.
const judul = document.getElementById('judul');
judul.innerHTML = "Bootcamp Dojobox.id";
//const judul = document.getElementById('judul');
// const p2 = 

//const { replace } = require("cypress/types/lodash")


//element.style.<property> --> mengubah syle dari elemen yang dipilih.
// const par1 = document.getElementById('p1');
// par1.style.color='red';
//judul.style.color = "orange";

//element.setAttribute() --> menambahkan attribute pada HTML.

//element.classList --> memanipulasi kelas

//classList.add() --> menambah kelas baru
// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');

//classList.remove() --> menghilangkan kelas yang ada
//classList.toggle() --> jika elemen kelas tidak ada, method ini akan menambahkan. jika elemen sudah punya, maka akan menghilangkan kelas tertentu.
//classList.contains() --> mengetahui kelas tertentu.
//classList.replace() --> mengganti kelas yang lama ke kelas yang baru.

// Node Manipulation
//document.createElement()
//document.createTextNode()
//node.appendChild()
//node.insertBefore()
//parentNode.removeChild()
//parentNode.replaceChild()


// // define dulu element yg akan di hapus
// const hapusElement = document.getElementsByTagName('a')[0]
// // define parent dari element yg akan dihapus
// const sectionA = document.getElementById('a')
// // parentNode.removeChild (element yg akan di hapus)
// sectionA.removeChild(hapusElement)


const h2 = document.createElement('h2')
const textBaru = document.createTextNode('H2')
h2.appendChild(textBaru)
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
sectionB.replaceChild(h2, p4)


const paragrafBaru = document.createElement('p')
const textbaru = document.createTextNode('Ini yang baru')
paragrafBaru.appendChild(textbaru)

const a = document.getElementById('a')
a.appendChild(paragrafBaru)


// // define dulu element yg akan di hapus
const hapusLink = document.getElementsByTagName('a')[0]
// // define parent dari element yg akan dihapus
const sectionA = document.getElementById('a')
// // parentNode.removeChild (element yg akan di hapus)
sectionA.removeChild(hapusLink)




// const nodeH1 = document.getElementById('judul');
// nodeH1.style.color='white'
// nodeH1.style.background='green'
// nodeH1.innerHTML='Bootcamp Dojobox'

// const ig = document.querySelector('#a a');
// ig.style.background='white'

// const paragraph = document.getElementsByTagName('p')

// for (let i = 0; i < (paragraph.length)-1; i++) {
//     paragraph[i].style.background='yellow';
// }

// const h1 = document.getElementsByTagName('h1')
// h1[0].style.fontSize='50px'

// const p4 = document.querySelector('#b p')
// p4.style.color='red'
// p4.style.fontSize='25px'
// p4.style.background='white'

const Pp =  document.querySelectorAll('p')
Pp[2].innerText='Ubah text dari js'

// const p2 = document.getElementsByClassName('p2')
// p2[0].style.color='red'

// const listul = document.querySelector('#b ul')
// const listli = document.getElementsByTagName('li')
// for (let i = 0; i < (listli.length); i++) {
//     listli[i].style.background='cyan';
//     listli[i].style.color='black'   
// }

// const div = document.getElementById('container')
// div.style.background='lime'

// const body = document.getElementById('body');
// body.style.background='grey'

// // // buat element baru berupa h2
// const h2 = document.createElement('h2')
// // // buat node text untuk h2
// const textBaru = document.createTextNode('H2')
// // // gabungkan node text ke h2
// h2.appendChild(textBaru)
// // // define p4
// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p')
// // // define parentNode

// // // replace p4 menjadi h2
// sectionB.replaceChild(h2, p4)