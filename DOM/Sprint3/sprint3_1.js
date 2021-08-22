// dom selection
// getElementByID() => node

const nodeH1 = document.getElementById
('judul');
nodeH1.style.color='white'
nodeH1.style.background='green'
nodeH1.innerHTML='Bootcamp Dojobox'

// getElementsByTagName => HTML Collection
const paragraph = document.getElementsByTagName('p')

for (let i = 0; i < (paragraph.length)-1; i++) {
    paragraph[i].style.background='yellow';
}
// paragraph[0].style.background='yellow'
// paragraph[1].style.background='yellow'
// paragraph[2].style.background='yellow'
// paragraph[3].style.background='yellow'

const h1 = document.getElementsByTagName('h1')
h1[0].style.fontSize='50px'

// document.query selector
const p4 = document.querySelector('#b p')
p4.style.color='red'
p4.style.fontSize='25px'

// root document
//const p = document.querySelector('p')
// rubah root
//const selectionB = document.getElementById('b')
// root sectionB
// const p = selectionB.querySelector('p')

// query selector All
const Pp =  document.querySelectorAll('p')
Pp[2].innerText='Ubah text dari js'

// berupa HTML collection
const p2 = document.getElementsByClassName('p2')
p2[0].style.color='red'

//const sb = document.getElementById('b')
const listul = document.querySelector('#b ul')
const listli = document.getElementsByTagName('li')
for (let i = 0; i < (listli.length); i++) {
    listli[i].style.background='cyan';
    listli[i].style.color='black'   
}

// const body = document.getElementById('body')
// body.style.background='blue'
const div = document.getElementById('container')
div.style.background='lime'