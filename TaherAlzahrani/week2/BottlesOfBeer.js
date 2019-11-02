let numsOfBottles = 99;
while (numsOfBottles >= 0) {
    if (numsOfBottles > 1)
        console.log("\n" + numsOfBottles + " bottles of beer on the wall, " + numsOfBottles + " bottles of beer.\nTake one down and pass it around, " + (numsOfBottles - 1) + ((numsOfBottles - 1 == 1) ? " bottle" : " bottles") + " of beer on the wall.");
    else if (numsOfBottles == 1)
        console.log("\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
    else {
        console.log("\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
    }
    numsOfBottles--;
}

//other way
// for (let i = 99; i >= 0; i--) {
//     if (i > 2)
//         console.log("\n" + i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, " + (i - 1) + " bottles" + " of beer on the wall.");
//     else if (i == 2)
//         console.log("\n" + i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, " + (i - 1) + " bottle" + " of beer on the wall.");
//     else if (i == 1)
//         console.log("\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
//     else {
//         console.log("\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
//     }
// }