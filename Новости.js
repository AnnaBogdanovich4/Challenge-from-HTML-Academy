var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button")
var imgSrc = document.getElementById("img-src");

var imgSrcs = [];

imgSrcs.push("https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg");
imgSrcs.push("https://www.avasflowers.net/img/prod_img/avasflowers-dreaming-of-tuscany-bouquet.jpg");
imgSrcs.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg9-gmySz0n6tZrQsIMxJoDFefDiqrx0li-40e7nJxMq3b_0KZ1oKzNjAXKZmFA_nk0Q&usqp=CAU");
imgSrcs.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6GuXnlbgTLDVqgd9AhP9s76Lmg2cLO3VL8YO-f4hGZmyoRDwGK6Q7g9WpsiAEVoQbPs&usqp=CAU");
imgSrcs.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbF9cE4n8pQz46xJbw0QPg8AxnH4fcUyL_XUBBla6dvcWiu6ZMI2rxcVSuupYiz4g0Umg&usqp=CAU");

var i = 0;
imgSrc.setAttribute("src", imgSrcs[i]);
prevButton.disabled = true
prevButton.addEventListener("click", prevPicter);
nextButton.addEventListener("click", nextPicter);

function prevPicter() {
    i--;
    imgSrc.setAttribute("src", imgSrcs[i]);
    nextButton.disabled = false;
    if (i === 0) {
        prevButton.disabled = true;
    }
}

function nextPicter() {
    i++;
    imgSrc.setAttribute("src", imgSrcs[i]);
    prevButton.disabled = false;
    if (i === imgSrcs.length - 1) {
        nextButton.disabled = true;
    }
}
