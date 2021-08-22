var mentor = ['Akhmad','Alif','Andika','Jojo'];
var ta = ['Adib','Valen',Vista];
var admin = ['Aura','Cahya'];

var input = prompt('Pilih -Mentor- ; -TA- ; -Admin-')

function dojobox(tim) {
    
if (tim == mentor) {
    document.write('Mentor : ' + mentor + '<br>');
} else if (tim == ta) {
    document.write('TA : ' + ta + '<br>');
} else if (tim == admin) {
    document.write('Admin : ' + admin + '<br>');
} else {
    document.write('Maaf tidak ada');
}

}