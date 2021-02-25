canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 50;
block_height = 50;

player = "";
block = "";

function player_update(){
    fabric.Image.fromURL("player.jpg", function (Img){
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player);
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        block = Img;
        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height);
        block.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block);
    });
}

window.addEventListener("keydown" ,my_keydown );

function my_keydown(e){
    Key_ASCII = e.keyCode;
    console.log(Key_ASCII);

    if(e.shiftKey == true && Key_ASCII == '80'){
        console.log("Shift+p clicked.");

        block_width = block_width + 10;
        block_height = block_height + 10;

        document.getElementById("Current_Width").innerHTML = block_width;
        document.getElementById("Current_Height").innerHTML = block_height;
    }

    if (e.shiftKey == true && Key_ASCII == '77'){
        console.log("Shift+m clicked.");

        block_width = block_width- 10;
        block_height = block_height - 10;

        document.getElementById("Current_Width").innerHTML = block_width;
        document.getElementById("Current_Height").innerHTML = block_height;
    }

    if (Key_ASCII == '38'){
        up();
        console.log("Up key is pressed");
    }

    if (Key_ASCII == '40'){
        down();
        console.log("Down key is pressed");
    }

    if (Key_ASCII == '37'){
        left();
        console.log("Left key is pressed");
    }

    if (Key_ASCII == '39'){
        right();
        console.log("Right key is pressed");
    }




    if(Key_ASCII == '70'){
        newImage("Head.PNG");
        console.log("f is pressed");
    }

    if(Key_ASCII == '66'){
        newImage("body.PNG");
        console.log("g is pressed");
    }

    if(Key_ASCII == '76'){
        newImage("legs.PNG");
        console.log("l is pressed");
    }

    if(Key_ASCII == '82'){
        newImage("Right Hand.PNG");
        console.log("r is pressed");
    }

    if(Key_ASCII == '72'){
        newImage("Left Hand.PNG");
        console.log("l is pressed");
    }
}