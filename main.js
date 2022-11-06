var canvas = new fabric.Canvas('myCanvas');


ballImgWidth = 30;
ballImgHeight = 30;


playerX=10;
playerY=10;

flagX=670;
flagY=420;

var playerObject="";
var blockImgObj="";

function playerUpdate(){
    fabric.Image.fromURL("GolfBall.webp", function(Img){
        playerObject=Img;

        playerObject.scaleToWidth(30);
        playerObject.scaleToHeight(30);
        playerObject.set({
            top:playerY,
            left:playerX
        });
console.log(playerY + "PlayerY");
console.log(playerX + "PlayerX");

        if (playerY!=500 && playerX!=760)
        {
        canvas.add(playerObject);
        }
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        
        blockImgObj=Img;

        blockImgObj.scaleToWidth(180);
        blockImgObj.scaleToHeight(160);
        blockImgObj.set({
            top:flagY,
            left:flagX
        });
        canvas.add(blockImgObj);
    });
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        ballImgWidth=ballImgWidth+10;
        ballImgHeight=ballImgHeight+10;
        document.getElementById("currentWidth").innerHTML=ballImgWidth;
        document.getElementById("currentHeight").innerHTML=ballImgHeight;

    }
    if(e.shiftKey == true && keyPressed == '77'){
        ballImgWidth=ballImgWidth-10;
        ballImgHeight=ballImgHeight-10;
        document.getElementById("currentWidth").innerHTML=ballImgWidth;
        document.getElementById("currentHeight").innerHTML=ballImgHeight;
    }


if(keyPressed == '38'){
    up();
    console.log("up");
}
if(keyPressed == '40'){
    down();
    console.log("down");
}
if(keyPressed == '37'){
    left();
    console.log("left");
}
if(keyPressed == '39'){
    right();
    console.log("right");
}
if(keyPressed == '49'){
    console.log("2");
    newImage('GolfFlag.png');
    console.log("1");
}

}
function up()
{
    if(playerY>=0)
    {
        playerY =playerY - ballImgHeight;
        console.log("ball image height=" + ballImgHeight);
        console.log("When Up arrow key is presses, X = " + playerX+" , Y =" +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
   }
   function down()
   {
    if(playerY<=1200)
    {
        playerY =playerY + ballImgHeight;
        console.log("ball image height=" + ballImgHeight);
        console.log("When Down arrow key is presses, X = " + playerX+" , Y =" +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
   }
   function right()
   {
    if(playerX<=1000)
    {
        playerX =playerX + ballImgWidth;
        console.log("ball image width=" + ballImgWidth);
        console.log("When Right arrow key is presses, X = " + playerX+" , Y =" +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
   }
   function left()
   {
    if(playerX>=0)
    {
        playerX =playerX - ballImgWidth;
        console.log("ball image width=" + ballImgWidth);
        console.log("When Left arrow key is presses, X = " + playerX+" , Y =" +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
   }