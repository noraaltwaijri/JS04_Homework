/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/
var Monkey= function(name,species,foodseaten) {
    this.name=name;
    this.species=species;
    this.foodseaten=foodseaten;
};

var bubby=new Monkey("bubby","champanzy",'bananan');
console.log("the name of this of the first monkyey is "+bubby.name+"\n"+"the specious is "+bubby.species+"\n"+"the food of this monkyey "+bubby.foodseaten+"\n");


var Squirrelmonkey =new Monkey("Squirrelmonkey","New World Monkey",'sinsects, bugs, fruits, leaves, and twigs');
console.log("the name of the second monkyey is "+Squirrelmonkey.name+"\n"+"the specious is "+Squirrelmonkey.species+"\n"+"the food of this monkyey "+Squirrelmonkey.foodseaten+"\n");


var VervetMonkey=new Monkey("Vervet Monkey","Old World classification",'fruits, figs, leaves, and flowers and eggs');
console.log("the name of Last one "+VervetMonkey.name+"\n"+"the specious is "+VervetMonkey.species+"\n"+"the food of this monkyey "+VervetMonkey.foodseaten);
