for(var i = 0; i <= 10; i++) {
    document.writeln('Count is:' + i + '<br>');
}

document.writeln('-----------------------------------------------------------------------------------<br>')

// count += 2 this is equal to count = count+2
for(var count = 1; count < 13; count += 2) {
    document.writeln('Count is ' + count + '<br>')
}

document.writeln('-----------------------------------------------------------------------------------<br>')

var str = 'Hello World!';
// document.writeln(str[0])
for(var i = 0; i < str.length; i++) {
    document.writeln(str[i]);
}



document.writeln('<br>-----------------------------------------------------------------------------------<br>')

// Loop through on array

var codeArr = ['CSS', 'HTML', 'JS', 21, true];
var len = codeArr.length;

for(var i = 0; i < len; i++) {
    document.writeln('Language: ' + codeArr[i] + '<br>');
}

document.writeln('-----------------------------------------------------------------------------------<br>')

// The module generator returns the reminder to division
// != means not equal to
// !=== means not equal to and checks if same data type
// == means equal to 12 == '12'
// === means equal to and checks if same data type 12 === '12'
for(var i = 1; i < 366; i++) {
    if (i % 2 == 0) {
        document.writeln('Even dates' + i + '<br>')
    }
}

document.writeln('-----------------------------------------------------------------------------------<br>')

// Excercise 3 - Write on your own
// Print all numbers between -10 and 10

for (var i = -10; i <= 10; i++) {
    console.log(i)
}

// Excercise 4
// Print all even numbers between 10 and 40

for (var i = 10; i <=40; i = i + 2) {
    console.log(i)
}

// Excercise 5
// Print all odd numbers between 300 and 333

for (var i = 300; i <=333; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// Excercise 6
// Write all numbers divisible by 5 AND 3 between 5 AND 50



// Excercise 7
// Multiplication
var multiplier = 9
for (var i = 0; i <= 10; i++) {
    var result = i * multiplier;
    document.writeln("<br>", "9 gånger ", i, " blir ", result, "<br>")
}
document.writeln('-----------------------------------------------------------------------------------<br>')





// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 5; j++) {
        document.writeln('* ')
    }
    document.writeln('<br>')
}