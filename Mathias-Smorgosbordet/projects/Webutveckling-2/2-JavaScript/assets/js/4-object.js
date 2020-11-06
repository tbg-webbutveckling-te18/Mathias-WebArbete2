var person = ['Sid', 33, 'Male', 'EagleShieldBay'];

person.shift();

document.writeln(person[2]);

var personFriends = ['Bob', 'Dylan', 'Aiizee', 'Deezee'];

// Perfect use case of an object
var user = {
    name: 'The kid',
    age: 33,
    city: 'HereSneezedDuck',
    friends: ['Bob', 'Dylan', 'Aiizee', 'Deezee'],
    isEvil: false,
    shoutout: function() {
        alert(`Shoutout to y'all!`);
    }
};

document.writeln(`<br>My name is ${user.name} and I am ${user.age} and I live in ${user.city}`)
user.shoutout();








