var person = ['Sid', 33, 'Male', 'EagleShieldBay'];
 
person.shift();
document.writeln(person[2])
 
var personFriends = ['Bob', 'Dylan', 'Aiizee', 'Deezee'];
 
// Perfect use case of an object
var user = {
    name: 'The kid',
    city: 'HereSneezedDuck',
    age: 33,
    friends: ['Bob', 'Dylan', 'Aiizee', 'Deezee'],
    isEvil: false,
    shoutout: function() {
        alert(`Shoutout to y'all!`);
    },
    levelUp: function() {
        return this.age++;
    } 
};

var oldBtn = document.querySelector(".aging");
oldBtn.addEventListener('click', function() {
    firstOutput.innerHTML = `<br>My name is ${user.name} and I am ${user.levelUp()} and I live in ${user.city}`
})

var firstOutput = document.getElementById("userInfo");
firstOutput.innerHTML += `<br>My name is ${user.name} and I am ${user.age} and I live in ${user.city}`

//document.writeln(`<br>My name is ${user.name} and I am ${user.age} and I live in ${user.city}`);
// user.shoutout();
 
for(var i = 0; i < user.friends.length; i++) {
    console.log(user.friends[i]);
}
 
// use forEach if array
user.friends.forEach(function(friend) {
    console.log(friend)
})
 
//console.log(user.age)
//user.age++;
//console.log(user.age)
 
var posts = [
    {
        author: "Dennis",
        comment: "Hey catz rules!"
    },
    {
        author: "Arnold",
        comment: "Nowai dude! Dogz rules!"
    },
    {
        author: "Kamala",
        comment: "Calm down. Both are equally nice."
    }
]
 
// HTML Reference
var postOutput = document.querySelector(".posts");
 
posts.forEach(function(post) {
    postOutput.innerHTML += `Author: ${post.author} <br> Commented: ${post.comment} <br><br>`;
})


var input = document.querySelector(".updateCity")
var city = document.querySelector(".posts .city")
input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter'){
        city.innerHTML = input.value;
        document.body.style.backgroundColor = '#007CF7'
        //document.body.style.transform += 'rotateX(100deg)';
    }
})

var toggle = document.querySelector(".btnToggle");
toggle.addEventListener("click", function() {
    //Bad way
    //city.style.fontweight = "bold";
    //city.style.fontSize = "32px";
    //city.style.color = "purple";
    //city.style.textShadow = "2px 2px 0px #000";

    //Good way
    //classList.add("");
    //classList.remove("");
    city.classList.toggle("changeText");
})

/*
***************************************
Create your own code - movieDB
***************************************
*/
// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate through the array with a forEach and print out something that looks like:
/* 
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/
var movies = [
    {
        film: "The Grinch (2000)",
        seen: "I have seen it alot",
        rating: "My rating: 8/10 IMDB: 6,2/10"
    },
    {
        film: "Pitch Black",
        seen: "I have not seen it",
        rating: "IMDB: 7,1/10"
    },
    {
        film: "The adventures of Tintin (2011)",
        seen: "I have seen it",
        rating: "My rating: 7,5/10 IMDB: 7,3/10"
    }
]


var movieOutPut = document.querySelector(".movieWork");
movies.forEach(function(movie) {
    movieOutPut.innerHTML += `Movie: ${movie.film} <br> Watch: ${movie.seen} <br> Rate: ${movie.rating} <br>--------<br>`
})

var opc = document.querySelector("#outputCalc");
var countObj = {
    someText: "This is some text",
    count: function(x, y){
        return x * y;
    },
    multidivide: function(x, y, z){
        return x * y / z;
    }
}

//opc.innerHTML = countObj.count(10, 5);

//opc.innerHTML = countObj.multidivide(9, 3, 4);

var outputSound = document.querySelector(".animalSound");
var btnAnimal = document.querySelectorAll(".btnAnimal");

var animalSound = {
    dog: function() {
        outputSound.innerHTML = "Voff Voff!";
    },
    cat: function() {
        outputSound.innerHTML = "Meow!";
    },
    wolf: function() {
        outputSound.innerHTML = "Aooooouuuuu!";
    },
    cow: function() {
        outputSound.innerHTML = "Moooooo!";
    }
}

for(var i = 0; i < btnAnimal.length; i++) {
    btnAnimal[i].addEventListener("click", function(){
        switch (this.innerHTML) {
            case "Dog": {
                animalSound.dog();
                break;
            }
            case "Cat": {
                animalSound.cat();
                break;
            }
            case "Wolf": {
                animalSound.wolf();
                break;
            }
            case "Cow": {
                animalSound.cow();
                break;
            }
        }
    })
    btnAnimal[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = "purple";
    })

    btnAnimal[i].addEventListener('mouseleave', function() {
        this.style.backgroundColor = "";
    })
}

var addFriend = document.querySelector(".friend")
var removeFriend = document.querySelector(".unfriend")

var users = {
    friends: ['Arnold', 'Stallone', 'Chuck'],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    removeFriend: function() {
        this.friends.pop();
    }
}


addFriend.addEventListener("click", function() {
    users.addFriend(prompt('Add friends name'));
    console.log('New friend added')
});

removeFriend.addEventListener("click", function() {
    users.removeFriend();
    console.log("One friend removed")
});

var btnDoomed = document.querySelector(".doomed");

//function youAreDoomed() {

//}

youAreDoomed = () => document.body.innerHTML = "Haha! Owned!";

btnDoomed.addEventListener("click", youAreDoomed)

var todo = document.querySelectorAll('.todo li');

for(var i = 0; i < todo.length; i++) {
    todo[i].addEventListener('mouseover', function(){
        this.classList.add("todo-hover")
    })

    todo[i].addEventListener('mouseleave', function(){
        this.classList.remove("todo-hover")
    })

    todo[i].addEventListener('click', function(){
        this.classList.toggle('todo-complete')
    })
}






