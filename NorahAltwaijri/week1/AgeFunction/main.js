let age
//let underage = age >=  16 ? false : true


function myFunction() {
    var age = prompt("Please enter your age", "99");
    if (age != null){
       if (age <16){
            document.getElementById("demo").innerHTML = "You are <mark>" + age + "</mark>  old and your life sucks"
        } else if (age >=16 && age<18){
            document.getElementById("demo").innerHTML = "You are <mark>" + age + "</mark>  old and you can drive wow"
        } else if(age >= 18 && age<21){
            document.getElementById("demo").innerHTML = "You are <mark>" + age + "</mark>  old and you can vote wow great"
        } else if(age >= 21&& age<25){
            document.getElementById("demo").innerHTML = "You are <mark>" + age + "</mark>  old and you can drink wow great cool"
        } else if(age >= 25&& age<35){
            document.getElementById("demo").innerHTML = "You are <mark>" + age + "</mark>  old and you can rent A Car wow great cool awesome :)"
        } else if(age >= 35&& age<62){
            document.getElementById("demo").innerHTML = "You are <mark>" + age + "</mark>  old and you can run for presidency wow great cool awesome"
        } else if(age >= 62){
            document.getElementById("demo").innerHTML = "You are <mark>" + age + "</mark> old and congratulations your dying chance is higher than others!!"
        } else {
            document.getElementById("demo").innerHTML = "You are <mark>" + age + "</mark>  old and you are surviving"
        } 
    }
  }