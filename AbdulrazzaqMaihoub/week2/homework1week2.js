var beernum=100;
while(beernum>1 && beernum<=100)
{
 console.log(beernum +' bottle of beer on the wall,'+ (--beernum) +" bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");

}

console.log('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.');
beernum--;
