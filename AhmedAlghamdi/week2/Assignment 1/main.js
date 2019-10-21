// JavaScript Document
// Ahmed Alghamdi
let i=100
while(i>0){
    let j=i-1;
    if(i>1 && i<101)
		document.write(`<br>${i} bottles of beer on the wall,${i} bottles of beer.<br>Take one down and pass it around,${j} bottles of beer on the wall.<br>`)
    else
		document.write(`<br>${i} bottles of beer on the wall,${i} bottles of beer.<br>Take one down and pass it around,no more bottles of beer on the wall.<br>`)
    i--;
}
document.write("<br><br>No more bottles of beer on the wall, no more bottles of beer.<br> Go to the store and buy some more, 99 bottles of beer on the wall.<br>")

let Code=String.fromCharCode(65,104,109,101,100,"",65,108,103,104,97,109,100,105);
document.write(`<br><p>${Code}</p><br>`);