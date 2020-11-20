function changeBodyBg(color) {
    document.body.style.background = color;
}

var output = document.getElementById('tellUruk')
var btnUruk = document.getElementsByClassName('urukQuote')

function tellUruk(uruk) {
    output.innerHTML = `Heres a quote: ${uruk}`
}

var urukArr = ['They call me the tarkslayer. I kill tarks. And... youre a tark.', 'What do you think would happen if i touched it.', 'Oh, that is my shadow, hello there!'];

btnUruk.addEventListener('click', function(){
    var randomUruk = urukArr[Math.floor(Math.random() * urukArr.length)];

    tellUruk(randomUruk)
});