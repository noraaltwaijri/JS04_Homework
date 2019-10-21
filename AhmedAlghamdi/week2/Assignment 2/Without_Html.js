let streetNum=[2092,660 ,405 ,2067 ,1655 ,4451,288];
let strName=['Brooklyn Street','Fire Access Road','Sweetwood Drive','Murphy Court','Maud Street','Frank Avenue','Fulton Street'];
let cityName=['Waynesboro','Coleridge','Arvada','Hopkins','Wilmington','Bridgeville','Chester'];
let staName=['VA','NC','CO','MN','DE','PA','WV'];
let zipCode=[22980,27234,80002,55343,19801,15017,26034];

let R=Math.round(Math.random() * 6);
console.log("\t\tRandom Address Generator\n");
console.log("Street Number:   ",streetNum[R],"\nStreet Name:     ",strName[R],"\nCity Name:       ",cityName[R],"\nState Name:      ",staName[R],"\nzip code:        ",zipCode[R])


/*
function Addresses () {
   var random0 = Math.floor(Math.random() * 6) + 1;
       document.getElementById('first-die').className = "Addre-"+random0;
}

let Code=String.fromCharCode(65,104,109,101,100,"",65,108,103,104,97,109,100,105);
document.write(`<br><p>${Code}</p><br>`);
*/