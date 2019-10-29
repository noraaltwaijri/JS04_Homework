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

var streetNumber = ['9377','140','919','9479','30','584'];
var streetName = ['Sheffield Dr.','Inverness St.','Golden Star Dr.','E. Ridge Circle','Pierce St.','University St.'];
var cityName = ['Lake Mary','Valrico','Augusta','Williamsport','New Lenox','Kissimmee'];
var stateName = ['FL','UT','GA','PA','IL','AL'];
var zipCode = ['32746','32746','32746','17701','60451','34741'];

function getRandom (input){
    return input[Math.floor ((Math.random()*input.length))];
}

function createAdress (){
    return `${getRandom(streetNumber)} ${getRandom(streetName)} ${getRandom(cityName)} ${getRandom(stateName)} ${getRandom(zipCode)}`;
}
var address = createAdress();
console.log(address);*/