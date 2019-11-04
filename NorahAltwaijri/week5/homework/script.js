console.log("JS connected"); // this to check that our script is connected to out HTML
function changeStyle() {

    var body = document.getElementsByTagName("body")[0];// query select body 
    // change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
    body.style.fontFamily = "Arial,sans-serif";
    // change the backgroundColor to a color of your choice
    body.style.backgroundColor = "#DDD6D2";


    var nickname =  document.querySelector("#nickname");// qurey select the ID nickname
    //add some value to nickname Hint: innerHTML
    nickname.innerHTML = "Purple Minion";
    // query select favorites byID
    var favorites= document.querySelector("#favorites");
    // query select hometown byID
    var hometown =  document.querySelector("#hometown");
    // feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';
    favorites.innerHTML = "Cats";
    hometown.innerHTML = "Riyadh";
    //change the color of all selectors to colors of your choice, it better be good LOL
    nickname.style.color = "#B094AC";
    favorites.style.color = "#C8FDFA";
    hometown.style.color = "#B0A98B";
    // https://www.w3schools.com/jsref/prop_style_color.asp

}