var FabCanvas = new fabric.Canvas("c");
var bg = "";

var loadBg = function(){
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        bg = Img;

        bg.scaleToWidth(FabCanvas.width);
        bg.scaleToHeight(FabCanvas.height);
        bg.set({
            top: 0,
            left: 0
        });
        FabCanvas.add(bg);
    });
}

var play =function(){
    document.getElementById("myAudio").play();
}