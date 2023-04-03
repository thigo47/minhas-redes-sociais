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

divs.home.addEventListener("click", function() {
    divs.iframe.src = ""

  });

divs.face.addEventListener("click",function(){
    divs.iframe.src = "../paginas/facebook/index.html"
})

divs.git.addEventListener("click", function(){
    divs.iframe.src = "../paginas/github/index.html"
})

divs.insta.addEventListener("click" , function(){
    divs.iframe.src = "../paginas/instagram/index.html"
})

divs.twit.addEventListener("click" , function(){
    divs.iframe.src = "../paginas/twitter/index.html"    
})

divs.yout.addEventListener("click" , function () {
    divs.iframe.src = "../paginas/youtube/index.html"
})

  