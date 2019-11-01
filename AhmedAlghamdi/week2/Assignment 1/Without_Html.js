
let i=100
while(i>0){
    let j=i-1;
    if(i>1 && i<101)
        console.log(`${i} bottles of beer on the wall,${i} bottles of beer.\nTake one down and pass it around,${j} bottles of beer on the wall.\n`)
    else
        console.log(`${i} bottles of beer on the wall,${i} bottles of beer.\nTake one down and pass it around,no more bottles of beer on the wall.\n`)
    i--;
    
}
console.log("\nNo more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, 99 bottles of beer on the wall.\n")