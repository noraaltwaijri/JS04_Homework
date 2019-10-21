let str1pt1 =' bottles of beer on the wall, '
let str1pt2 = ' bottles of beer.'
let str2pt1 =  'Take one down and pass it around, '
let str2pt2 = ' bottles of beer on the wall.'

for (let i = 99; i >= 0; i--) {
    if (i==1){
        console.log(i + ' bottle of beer on the wall, ' +  i + str1pt2)
        let  str2pt2  = 'no more bottles of beer on the wall.'
        console.log( str2pt1 + str2pt2)
    }

    else if (i==0){
        console.log(i + ' bottle of beer on the wall, ')
        let  str2pt2  = 'no more bottles of beer on the wall.'
        console.log( str2pt1 + str2pt2)
    } 
    else {
        console.log( i + str1pt1 + i + str1pt2)
        console.log( str2pt1 + (i-1) + str2pt2)
    }
    
}