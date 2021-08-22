// var ulang = 1;
// while(ulang<=10){
//     document.write('Hai'
//     + '<br>');
//     ulang += 1;
// }

// for (var (index) = 0; (index) < array.length; (index)++) {
//     const element = array[(index)];
// }

// var datasiswa = 1;
// while(datasiswa<=5){
//     document.write('Member TA Vista Nomor Induk' +  datasiswa
//     + '<br>');
//     datasiswa +=1;
// }

// for (var iteration = 6; iteration <=10; iteration++) {
//     document.write('Membert TA Intan Nomor Induk' + iteration
//     + '<br>');
// }

// var sayur = [];
// sayur = ['wortel', 'bayam', 'sawi', 'kangkung', 'terong']

// document.write(typeof(sayur) + '<br>')
// document.write(sayur);
// document.write('<br>');
// document.write(sayur.length);
// document.write('<br>');
// document.write(sayur[1]);

// var testFungsi = function() {
//     alert('Hallo');
// }
// var myArr = ['test', 123, true, testFungsi, [2,3,4] ]
// document.write('<br>');
// document.write(myArr[4][0]);

// var myArr2 = []
// myArr2[0] = 'Senin';
// myArr2[1] = 'Selasa';
// myArr2[2]= 'Rabu';
// myArr2[3] = 'Kamis';
// myArr2[3] = undefined;


var sayur = [];
sayur = ['wortel', 'bayam', 'sawi', 'kangkung', 'terong', 'kentang']

// 1. join
//document.write(sayur.join('<br>'))
// 2. push dan pop
//sayur.push('kacang');
sayur.pop()
//document.write(sayur.join('<br>'))

sayur.unshift('sawi');
sayur.shift()
//document.write(sayur.join('<br>'))

sayur.splice(2.2, 'cabe', 'bawang')
document.write(sayur.join('<br>'))

// 5. slice
var newSayur = sayur.slice(1,4)
document.write('<br>')
document.write('<br>')
document.write(newSayur.join('<br>'))

// tidak mengembalikan array
sayur.forEach(function(e,i) {
    document.write(i + ' = ' + e + '<br>')
})
document.write('<br>')
document.write('<br>')

sayur.forEach(function(e,i) {
    document.write((i+1) + '. ' + e + '<br>')
})

// mengembalikan array
var sayurBaru = sayur.map(function(e,i){
    return e + ' sangat lezat'
})
document.write('<br>')
document.write('<br>')

document.write(sayurBaru.join('<br>'))