var codeArr = [44, 56, 22, 91, 20]
var len = codeArr.length;

document.writeln('This is the Array method: <br>')

for(var i = 0; i < len; i++) {
    document.writeln(codeArr[i] + '<br>')
}

document.writeln('-----------------------------------------------------------------------------------<br>')

var multiplier = 5;

document.writeln('This is with the Var method on multiply things: <br>')

for (var i = 0; i <= 10; i++) {
    var result = i * multiplier;
    document.writeln('5 gånger ', i, ' blir ', result, '<br>')
}

document.writeln('-----------------------------------------------------------------------------------<br>')

document.writeln('This is Counting method by going -10 to 10: <br>')

for (i = -10; i <= 10; i++) {
    document.writeln(i + '<br>')
}

document.writeln('-----------------------------------------------------------------------------------<br>')