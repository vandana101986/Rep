var canvas = new fabric.Canvas("myCanvas");

playerX= 10;
playerY=10;

blockImg_width=30;
blockImg_height=30;

var playerObject="";
var blockImg_object="";

function player_load(){
    fabric.Image.fromURL("player.png", function(Img)
    {
        playerObject=Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
    });
    canvas.add(playerObject);
}

function new_blocks(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
        blockImg_object=Img;

        blockImg_object.scaleToWidth(blockImg_width);
        blockImg_object.scaleToHeight(blockImg_height);
        blockImg_object.set({
            top:playerY,
            left:playerX
        });
    }); 
    canvas.add(blockImg_object);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed=="38"){
        up();
        console.log("Up");
    }

    if(keyPressed=="40"){
        down();
        console.log("Down");
    }

    if(keyPressed=="39"){
        right();
        console.log("Right");
    }

    if(keyPressed=="37"){
        left();
        console.log("Left");
    }

    if(keyPressed=="87"){
        new_blocks("wall.jpg");
        console.log("W");
    }

    if(keyPressed=="71"){
        new_blocks("ground.png");
        console.log("G");
    }

    if(keyPressed=="76"){
        new_blocks("light_green.png");
        console.log("L");
    }

    if(keyPressed=="84"){
        new_blocks("trunk.jpg");
        console.log("T");
    }

    if(keyPressed=="82"){
        new_blocks("roof.jpg");
        console.log("R");
    }

    if(keyPressed=="89"){
        new_blocks("yellow_wall.png");
        console.log("Y");
    }

    if(keyPressed=="68"){
        new_blocks("dark_green.png");
        console.log("D");
    }

    if(keyPressed=="85"){
        new_blocks("unique.png");
        console.log("U");
    }

    if(keyPressed=="67"){
        new_blocks("cloud.jpg");
        console.log("C");
    }

    if(e.shiftKey==true && keyPressed=="77"){
        console.log("M and Shift are pressed together");
        blockImg_height= blockImg_height+10;
        blockImg_width= blockImg_width+10;
        document.getElementById("current_width").innerHTML=blockImg_width;
        document.getElementById("current_height").innerHTML=blockImg_height;
    }

    if(e.shiftKey==true && keyPressed=="78"){
            console.log("N and Shift are pressed together");
            blockImg_height= blockImg_height-10;
            blockImg_width= blockImg_width-10;
            document.getElementById("current_width").innerHTML=blockImg_width;
            document.getElementById("current_height").innerHTML=blockImg_height;
    }
}

function up(){
    if(playerY>=0){
        playerY=playerY-blockImg_height;
        console.log("Block img height is "+ blockImg_height);
        console.log("When up arrow is pressed, X = "+ playerX+ " , Y = "+ playerY);
        canvas.remove(playerObject);
        player_load();
    }
}

function down(){
    if(playerY<=500){
        playerY=playerY+blockImg_height;
        console.log("Block img height is "+ blockImg_height);
        console.log("When down is pressed, X = "+ playerX+ " , Y = "+ playerY);
        canvas.remove(playerObject);
        player_load();
    }
}

function left(){
    if(playerX>=0){
        playerX=playerX-blockImg_width;
        console.log("Block img width is "+ blockImg_width);
        console.log("When left arrow is pressed, X = "+ playerX+ " , Y = "+ playerY);
        canvas.remove(playerObject);
        player_load();
    }
}

function right(){
    if(playerX<=850){
        playerX=playerX+blockImg_width;
        console.log("Block img width is "+ blockImg_width);
        console.log("When right arrow is pressed, X = "+ playerX+ " , Y = "+ playerY);
        canvas.remove(playerObject);
        player_load();
    }
}




