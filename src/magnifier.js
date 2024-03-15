/*
  Prefix "x2G_" is used to make ID-s of newly created elements unique.
*/
const StyleSheetURL = "https://cdn.jsdelivr.net/gh/2G-Lab/2G-Image-Magnifier/src/magnifier.css";

class x2G_ImageMagnifier {
  constructor (imagesClassName) {
    this.imgClass = imagesClassName;
    this.expClass = "x2G_expandable"

    this.outerBox = document.createElement("div");
    this.closeBut = document.createElement("div");
    this.captions = document.createElement("div");
    this.expImage = document.createElement("img");

    this.outerBox.id = "x2G_outerBox";
    this.closeBut.id = "x2G_closeBut";
    this.captions.id = "x2G_captions";
    this.expImage.id = "x2G_expImage";

    this.outerBox.appendChild(this.closeBut);
    this.outerBox.appendChild(this.captions);
    this.outerBox.appendChild(this.expImage);

    this.collection = null;
    this.imageArray = null;

    this.closeBut.innerHTML = "&times;";
    this.closeBut.addEventListener('click', this.hideOuterBox.bind(this));

    this.start();
  }

  start () {
    document.body.appendChild(this.outerBox);
    this.collection = document.getElementsByClassName(this.imgClass);
    this.imageArray = Array.from(this.collection);
    this.imageArray.forEach(this.initImage, this);
  }

  initImage(image) {
    image.className = this.imgClass + " " + this.expClass;
    image.addEventListener('click', this.showOuterBox.bind(this));
  }

  showOuterBox(event) {
    const image = event.currentTarget;
    this.outerBox.style.display = "block";
    this.captions.innerHTML = image.alt;
    this.expImage.src = image.src;
  }

  hideOuterBox () { 
    this.outerBox.style.display = "none";
  }
}

class x2G_ImagesStyleSheet {
  constructor (StyleSheetURL) {
    this.link  = document.createElement("link");
    this.link.rel  = "stylesheet";
    this.link.href = StyleSheetURL;
    document.head.appendChild(this.link);
  }
}
new x2G_ImagesStyleSheet(StyleSheetURL);
