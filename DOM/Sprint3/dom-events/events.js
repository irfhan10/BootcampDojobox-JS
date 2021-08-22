// events handler
const p3 = document.getElementsByClassName('p3')[0]

function ubahWarna() {
    p3.style.backgroundColor='orange'    
}
function balikWarna() {
    p3.style.backgroundColor='blue'
}

p3.onclick=ubahWarna;
p3.ondblclick = balikWarna;

const p2 = document.getElementsByClassName('p2')[0];

function fontStyle() {
    p2.style.fontFamily='calibri'
}
p2.onclick=fontStyle;

// addEventListener()

const p4 = document.querySelector('#b p')

p4.addEventListener('click', function(){
    const newLi = document.createElement('li')
    const isiNewLi = document.createTextNode('List Terbaru')
    const ul = document.querySelector('#b ul')
    newLi.appendChild(isiNewLi)
    ul.appendChild(newLi)
})

// container.addEventListener('click', function{

// })

// const button = document.getElementById('c')
// function klikButton() {
//     button.style.backgroundColor='lightblue'
// }
// button.onclick=klikButton;

const button = document.querySelector('#c button');
button.addEventListener('click', function klik(){
    div.style.fontSize='50px'
})

