var slider2 = {
    prevButton: null,
    nextButton: null,
    imgSrc: null,
    imgSrcs: [],
    i: 0,

    start: function (elId) {
        var that = this;

        var el = document.querySelector(elId);

        this.prevButton = el.querySelector("#prev-button");
        this.nextButton =  el.querySelector("#next-button");
        this.imgSrc = el.querySelector("#img-src");

        this.imgSrcs.push("https://i2-prod.liverpoolecho.co.uk/incoming/article18834445.ece/ALTERNATES/s615/0_Ready-Steady-Cook.jpg");
        this.imgSrcs.push("http://nebula.wsimg.com/27ed5f9eac0bc0c733779edd19ffa27e?AccessKeyId=87D48CF3B3B82FC6CA67&disposition=0&alloworigin=1");
        this.imgSrcs.push("https://i.pinimg.com/236x/f9/2f/c0/f92fc0258468f73154fe5c7caaa8683f--george-clooney-amal-clooney.jpg");
        this.imgSrcs.push("https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-15.jpg");

        this.imgSrc.src = this.imgSrcs[this.i];
        this.prevButton.disabled = true;

        this.prevButton.addEventListener("click", function (e) {
            that.prevPicter(e)
        });
        this.nextButton.addEventListener("click", function (e) {
            that.nextPicter(e)
        });
    },

    prevPicter: function (event) {
        this.i--;
        this.imgSrc.src = this.imgSrcs[this.i];
        this.nextButton.disabled = false;
        if (this.i === 0) {
            this.prevButton.disabled = true;
        }
    },

    nextPicter: function (event) {
        this.i++;
        this.imgSrc.src = this.imgSrcs[this.i];
        this.prevButton.disabled = false;
        if (this.i === this.imgSrcs.length - 1) {
            this.nextButton.disabled = true;
        }
    }
};










