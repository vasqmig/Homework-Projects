function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  //ES2015

  function createInstructor (firstName,lastName) {
   return {
    firstName,
    lastName
   }
  }


//Compute porperty names
  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


//ES2015

let favoriteNumber = 42;

let instructor = {
    firstName:"Colt",
    [favoriteNumber]: "That is my favorite!"
}


//Object Methods
    var instructor = {
        firstName: "Colt",
        sayHi: function(){
          return "Hi!";
        },
        sayBye: function(){
          return this.firstName + " says bye!";
        }
      }

// ES2015
    const instructor = {
        firstName: "Colt",
        sayHi(){
            return "Hi";
        },
        sayBye(){
            return this.firstName + "says bye!";
        }
    }

//creatAnial function
    const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"


//answer
function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}