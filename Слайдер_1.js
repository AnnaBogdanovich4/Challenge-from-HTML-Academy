function Slider (){
    this.prevButton = null;
    this.nextButton = null;
    this.imgSrc = null;
    this.imgSrcs = [];
    this.i = 0;

    this.start = function (elId) {
        var that = this;

        var el = document.querySelector(elId);

        this.prevButton = el.querySelector("#prev-button");
        this.nextButton =  el.querySelector("#next-button");
        this.imgSrc = el.querySelector("#img-src");

        this.prevButton.addEventListener("click", function (e) {
            that.prevPicter(e)
        });
        this.nextButton.addEventListener("click", function (e) {
            that.nextPicter(e)
        });

        this.imgSrcs.push("https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg");
        this.imgSrcs.push("https://www.avasflowers.net/img/prod_img/avasflowers-dreaming-of-tuscany-bouquet.jpg");
        this.imgSrcs.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg9-gmySz0n6tZrQsIMxJoDFefDiqrx0li-40e7nJxMq3b_0KZ1oKzNjAXKZmFA_nk0Q&usqp=CAU");
        this.imgSrcs.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6GuXnlbgTLDVqgd9AhP9s76Lmg2cLO3VL8YO-f4hGZmyoRDwGK6Q7g9WpsiAEVoQbPs&usqp=CAU");
        this.imgSrcs.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbF9cE4n8pQz46xJbw0QPg8AxnH4fcUyL_XUBBla6dvcWiu6ZMI2rxcVSuupYiz4g0Umg&usqp=CAU");

        this.imgSrc.src = this.imgSrcs[this.i];
        this.prevButton.disabled = true;
    };

    this.prevPicter = function(event) {
        this.i--;
        this.imgSrc.src = this.imgSrcs[this.i];
        this.nextButton.disabled = false;
        if (this.i === 0) {
            this.prevButton.disabled = true;
        }
    };

    this.nextPicter = function (event) {
        this.i++;
        this.imgSrc.src = this.imgSrcs[this.i];
        this.prevButton.disabled = false;
        if (this.i === this.imgSrcs.length - 1) {
            this.nextButton.disabled = true;
        }
    }
};










