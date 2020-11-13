var d = new Date();

if (d.getHours() < 10){
    document.body.style.backgroundColor = "yellow";
}
else if (d.getHours() < 18) {
    document.body.style.backgroundColor = "orange";
}
else {
    document.body.style.backgroundColor = "gray";
}