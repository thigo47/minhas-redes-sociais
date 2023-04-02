let divs = {
    home:document.getElementById("home"),
    face:document.getElementById("face"),
    git:document.getElementById("git"),
    insta:document.getElementById("insta"),
    twit:document.getElementById("twit"),
    yout:document.getElementById("yout"),
    img:document.getElementById("img"),
    iframe:document.getElementById("iframe")
}

divs.face.addEventListener("click",function(){
    divs.iframe.src = "../facebook/index.html"
})