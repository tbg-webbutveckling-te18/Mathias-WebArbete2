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
    } 
};
 
document.writeln(`<br>My name is ${user.name} and I am ${user.age} and I live in ${user.city}`);
// user.shoutout();
 
for(var i = 0; i < user.friends.length; i++) {
    console.log(user.friends[i]);
}
 
// use forEach if array
user.friends.forEach(function(friend) {
    console.log(friend)
})
 
console.log(user.age)
user.age++;
console.log(user.age)
 
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







