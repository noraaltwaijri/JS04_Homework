// Ahmed Alghamdi
/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */
let q1 = ["image1.png","image2.png","image3.png"];
console.log('1-Create an array of image source filenames.\nUse "image1.png", "image2.png", and "image3.png" as the array values.\nq1=' + q1);
console.log('Type of the Q1=',typeof(q1));
/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */
let q2=q1[0];
console.log('2-Using the array from Question 1, \nstore the first element of the array in variable q2.\nq2='+q2);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

console.log('3-Get the length of the first array(number of elements in the array)\nand store it in variable q3');
let q3=q1[0].length;
console.log('q3=',q3);
/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */
console.log('\n4-Using the array from Question 1, store the last element of the array\nin variable q4. Hint: How can we get the number of elements in the array?');
numOfElements=q1.length-1;
let q4=q1[numOfElements];
console.log('q4=',q4);

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */
console.log("\n5- Create an array of numbers using 1, 2, 3, and 4 as values...");
let MyArray=[1,2,3,4];
for(i=0;i<=MyArray.length-1;i++){
    MyArray[i]++;
    /*and we can do pre-increment
    ++MyArray[i];
    ++Variable --> (pre-increment)
    Variable++ --> (post-increment)
    */
    console.log(i,'-->',MyArray[i]);
}
console.log("\n-------[ Second Solution ] with function()");
let MyArray2=[1,2,3,4];
function output(item,index){
    item++;
    console.log(index,'->', item);
}
MyArray2.forEach(output);

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */
console.log("\n6-find the average of the numbers in the array...");
let sum1=0;
    for(let i=0 ;i<=MyArray.length-1;i++){
        sum1+= MyArray[i];
    }
    Llength=MyArray.length
console.log("\n Average= "+sum1/Llength);
let Code=String.fromCharCode(65,104,109,101,100,"",65,108,103,104,97,109,100,105);
console.log("\n",Code);
