let divs = {
    home:document.getElementById("home"),
    face:document.getElementById("face"),
    git:document.getElementById("git"),
    insta:document.getElementById("insta"),
    twit:document.getElementById("twit"),
    yout:document.getElementById("yout"),
    img:document.getElementById("img")
}

divs.face.addEventListener("click",function(){
    divs.img.src = ""                      
})