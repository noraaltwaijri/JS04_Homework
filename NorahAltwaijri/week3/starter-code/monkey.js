function Monkey(name, species, foodsEaten) {
    this.name = ''
    this.species = ''
    this.foodsEaten = []
    this.eatSomething = function(food) {
        foodsEaten.push(food)
    }
    this.introduce = function(){
        console.log('I am '+ name+ ' I am part of the '+ species+' species, and I ate '+foodsEaten)
    }
  }

  let monkey1 = new Monkey("Aldo", "Chimpanzee", [])
  let monkey2 = new Monkey("Raffle", "Barbary", [])
  let monkey3 = new Monkey("Bonzo", "Babbon", [])

  monkey1.eatSomething('Banana')
  console.log(monkey1.introduce())

  let monkey = {
      name : '',
      species : '',
      foodsEaten : [],
      eatSomething: function(food) {
          this.foodsEaten.push(food)
      },
      introduce: function(){
          console.log('I am '+ this.name+ ' I am part of the '+ this.species+' species, and I ate '+this.foodsEaten)
      }
  }

let monkey01 = monkey;
monkey01.name = 'Bonzo'
monkey01.species = 'Babbon'
monkey01.eatSomething('Apples') 
monkey01.introduce()
