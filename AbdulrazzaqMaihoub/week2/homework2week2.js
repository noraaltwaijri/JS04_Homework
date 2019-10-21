var stnum=[15,20,25,35,45];

/*for (var i=0;i<5;i++){
    console.log(stnum[i]);
}*/
var stname=['abubaker','othman','khalid','broadway'];
/*for (var i=0;i<stname.length;i++){
    console.log(stname[i]);
}*/

var citname=['madinah','makkah','new york','london'];
/*for (var i=0;i<citname.length;i++){
    console.log(citname[i]);
}*/
var citzip=[124,11234,23456,67871,7654]
var result=[+ " "+stnum[Math.floor(Math.random())*4]+"  "+stname[Math.floor(Math.random())*3]+" "+citname[Math.floor(Math.random())*3]+" "+citzip[Math.floor(Math.random())*4]];
console.log(result);