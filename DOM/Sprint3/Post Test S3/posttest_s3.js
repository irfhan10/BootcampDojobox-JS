// Button satu
const btnSatu = document.getElementById('buttonSatu')
function warnaParagraf1() {
    const tagP = document.getElementsByTagName('p')
    for (let i = 0; i < (tagP.length); i++) {
    tagP[i].style.background="cyan"; 
    }
}
function warnaParagraf2() {
    const tagP = document.getElementsByTagName('p')
    for (let i = 0; i < (tagP.length); i++) {
    tagP[i].style.background="white"; 
    }
}
btnSatu.onclick=warnaParagraf1;
btnSatu.ondblclick=warnaParagraf2;


// Button dua
const btnDua = document.getElementById('buttonDua')
function tombolDua() {
    const styleButton = document.getElementById('buttonDua');
    styleButton.style.background="lime";
    styleButton.style.color="red";
}
function tombolDua2() {
    const styleButton = document.getElementById('buttonDua');
    styleButton.style.background="green";
    styleButton.style.color="black";
}
btnDua.onclick=tombolDua;
btnDua.ondblclick=tombolDua2;


// Button tiga
const btnTiga = document.getElementById('buttonTiga')
btnTiga.addEventListener('click', function() {
    const gantiFont = document.getElementById('container');
    gantiFont.style.fontFamily="Comic Sans MS"
    gantiFont.style.color="orange"

    btnTiga.addEventListener('dblclick', function () {
        const gantiFont = document.getElementById('container');
        gantiFont.style.fontFamily="sans-serif"
        gantiFont.style.color="black"
    });
});


// Button empat
const btnEmpat = document.getElementById('buttonEmpat')
btnEmpat.addEventListener('click', function() {
    const divParagraf = document.getElementById('container');
    divParagraf.style.fontSize="50px"
});


// Button lima
const btnLima = document.getElementById('buttonLima')
function warnaContainer1() {
    const div = document.getElementById('container')
    div.style.background="orange"
}
function warnaContainer2() {
    const div = document.getElementById('container')
    div.style.background="white"
}
btnLima.onclick=warnaContainer1;
btnLima.ondblclick=warnaContainer2;


// Button enam
const btnEnam = document.getElementById('buttonEnam')
function ubahTag() {
    const h2 = document.createElement('h2')
    const textBaru = document.createTextNode('Tag H2')
    h2.appendChild(textBaru)
    const sectionA = document.getElementById('a')
    const p1 = sectionA.querySelector('p')
    sectionA.replaceChild(h2, p1)
}
btnEnam.onclick=ubahTag;


// Button tujuh
const btnTujuh = document.getElementById('buttonTujuh')
function addRemove() {
    const newLi = document.createElement('li')
    const isiNewLi = document.createTextNode('Mentor Baru')
    const ul = document.querySelector('#b ul')
    newLi.appendChild(isiNewLi)
    ul.appendChild(newLi)

    const hapusli = document.getElementsByTagName('li')[0]
    hapusli.remove(ul)
}
btnTujuh.onclick=addRemove;


// Button delapan
const btnDelapan = document.getElementById('buttonDelapan')
function gantiText() {
    const judul = document.getElementById('judul');
    judul.innerHTML="Post Test";
}
btnDelapan.onclick=gantiText;


// Button sembilan
const btnSembilan = document.getElementById('buttonSembilan')
function hapus() {
    const hapus = document.getElementsByTagName('a')[0]
    const sectionA = document.getElementById('a')
    sectionA.removeChild(hapus)
}
btnSembilan.onclick=hapus;


// Button sepuluh
const btnSepuluh = document.getElementById('buttonSepuluh')
function addLink() {
    const linkBaru = document.createElement('a')
    const linkGithub = document.createTextNode('https://github.com/irfhan10/BootcampDojobox-JS')
    linkBaru.appendChild(linkGithub)
    linkBaru.setAttribute('href', 'https://github.com/irfhan10/BootcampDojobox-JS')
    const sectionA = document.getElementById('a')
    //const sectionA = document.get
    sectionA.appendChild(linkBaru)
}
btnSepuluh.onclick=addLink;