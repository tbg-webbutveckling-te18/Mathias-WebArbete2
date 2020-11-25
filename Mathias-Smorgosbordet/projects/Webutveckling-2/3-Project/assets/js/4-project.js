var messageArr = ['This is a message', 'Lucky us!', 'Well... fate hasnt been kind to you. Look who its brought you to']

var user = {
    name: 'Bollocks',
    age: 69,
    city: 'Fucking',
    isEvil: false,
    shoutout: function(){
        var randomMessage = messageArr[Math.floor(Math.random() * messageArr.length)]
        alert(randomMessage)
    }
}

document.writeln(`My name is ${user.name} and I am ${user.age} years old and I live in ${user.city}`)
user.shoutout();














