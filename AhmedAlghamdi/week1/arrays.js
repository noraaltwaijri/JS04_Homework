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
var q1 = ["image1.png","image2.png","image3.png"];
console.log('1-Create an array of image source filenames.\nUse "image1.png", "image2.png", and "image3.png" as the array values.\nq1=' + q1);
console.log('Type of the Q1=',typeof(q1));
/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */
q2=q1[0];
console.log('2-Using the array from Question 1, \nstore the first element of the array in variable q2.\nq2='+q2);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

console.log('3-Get the length of the first array(number of elements in the array)\nand store it in variable q3');
q3=q1[0].length;
console.log('q3=',q3);
/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */
console.log('\n4-Question 4...');
numOfElements=q1.length-1;
q4=q1[numOfElements];
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
console.log("\n5-Question 5...");
let Array=[1,2,3,4]; 
Array.forEach(output);
function output(item, index, Array){
    item++;
    console.log(index,'->', item);
}

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

let sum1=0;
    for(let i=0 ;i<=3;i++){
        sum1+= Array[i];
    }
    Llength=Array.length
console.log("\n6-Average="+sum1/Llength);
