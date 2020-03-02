function changeBackground(){
    var randomNumber = Math.floor(Math.random() * 1) + 1;
    
    if (randomNumber === 1){
    document.getElementById('divimagen').style.backgroundColor = "#ff6666";
    document.getElementById('divimagen').style.backgroundImage = "url(src/imagenes/1.png)";

}
}