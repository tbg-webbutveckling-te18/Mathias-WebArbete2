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
        film: "The Grinch"
    }
]


var movie = document.querySelector(".movieWork");
movies.forEach(function(movie) {
    movie.innerHTML += `Movie: `
})






