if(typeof jQuery!=='undefined'){
    console.log('jQuery Loaded');
}
else{
    console.log('not loaded yet');
}

$(document).ready(function(){
    let randomColor, red, blue, green;
    var fonts = document.querySelectorAll("select#fontChange > option");
    for(var i = 0;i < fonts.length;i++) {
        red=Math.floor(Math.random()*180);
        green=Math.floor(Math.random()*190);
        blue=Math.floor(Math.random()*190);
        randomColor = "rgb(" + red + ',' + green + ',' + blue + ')';
        $("#font"+i).css({
            "background-color" : randomColor,
            "font-family" : fonts[i].value
        }); 
    }
});
