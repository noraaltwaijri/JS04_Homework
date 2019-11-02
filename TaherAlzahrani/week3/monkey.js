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

var monkeysInfo = {
    monkeys: [{ //I created all monkeys as objects in an array
        name: "Golden Nose",
        species: "Golden snub-nosed monkey",
        foodsEaten: ["lichens", "young leaves", "fruits or seeds", "buds", "mature leaves", "herbs", "bark", "flowers"]
    }, {
        name: "Leafoy",
        species: "Dusky leaf monkey",
        foodsEaten: ["unripe fruits", "plant leaves", "flowers"]
    }, {
        name: "The Emperor",
        species: "Emperor tamarin",
        foodsEaten: ["flowers", "bird eggs", "fruit", "gum", "tree sap"]
    }],

    eatSomething: function (monkeyName, food) {
        let monkey = this.monkeys.find(m => m.name == monkeyName).foodsEaten.push(food);
    },
    introduce: function (str) {
        let monkey = this.monkeys.find(m => m.name == str);
        if (monkey != null)
            console.log(monkey.name + " is a monkey of \"" + monkey.species + "\" species and it eat any of (" + monkey.foodsEaten.toString() + ")");
        else
            console.log("sorry, we don't have information about the monkey you looking for :(");

    }
}

// monkeysInfo.introduce("Golden Nose");
// monkeysInfo.introduce("Leafoy");
// monkeysInfo.introduce("the Emperor");

//monkeysInfo.eatSomething("Golden Nose", "banana");
//monkeysInfo.introduce("Golden Nose");
//monkeysInfo.eatSomething("Leafoy", "apple");
//monkeysInfo.introduce("Leafoy");