// JavaScript Document
// Ahmed Alghamdi

let streetNum=[2092,660 ,405 ,2067 ,1655 ,4451,288];
let strName=['Brooklyn Street','Fire Access Road','Sweetwood Drive','Murphy Court','Maud Street','Frank Avenue','Fulton Street'];
let cityName=['Waynesboro','Coleridge','Arvada','Hopkins','Wilmington','Bridgeville','Chester'];
let staName=['VA','NC','CO','MN','DE','PA','WV'];
let zipCode=[22980,27234,80002,55343,19801,15017,26034];

let A= document.getElementById('Generate');

A.onclick =function(){
let R=Math.round(Math.random() * 6);
document.write("\t\tRandom Address Generator\n");
document.write("<hr><br>Street Number:   ",streetNum[R],"<br>Street Name:     ",strName[R],"<br>City Name:       ",cityName[R],"<br>State Name:      ",staName[R],"<br>zip code:        ",zipCode[R])
}
let Code=String.fromCharCode(65,104,109,101,100,"",65,108,103,104,97,109,100,105);
document.write(`<br><hr><p>${Code}</p><br>`);
