//Create a reference for canvas 
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
green_car_width = 75
green_car_height = 100

background_image = "parkingLot.jpg";
green_car_image = "car2.png";

//Set initial position for a car image.
green_car_x = 5;
green_car_y = 225;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    green_car_imgTag = new Image();
    green_car_imgTag.onload = uploadrover;
    green_car_imgTag.src = green_car_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreen_car() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(green_car_imgTag, green_car_x, green_car_y, green_car_width, green_car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(green_car_y >= 0) {
        green_car_y = green_car_y - 10;
        console.log("Cuando se presiona la flecha hacia arriba, x ="+green_car_x+", y="+green_car_y);
        uploadBackground();
        uploadgreen_car();
}
}

function down()
{
	//Define function to move the car downward
	if(green_car_y >= 500) {
        green_car_y = green_car_y + 10;
        console.log("Cuando se presiona la flecha hacia abajo, x ="+green_car_x+", y="+green_car_y);
        uploadBackground();
        uploadgreen_car();
}
}

function left()
{
	//Define function to move the car left side
	if(green_car_x >= 0) {
        green_car_x = green_car_x - 10;
        console.log("Cuando se presiona la flecha hacia izquierda, x ="+green_car_x+", y="+green_car_y);
        uploadBackground();
        uploadgreen_car();
}

}


function right()
{
	//Define function to move the car right side
	if(green_car_x >= 700) {
        green_car_x = green_car_x - 10;
        console.log("Cuando se presiona la flecha hacia derecha, x ="+green_car_x+", y="+green_car_y);
        uploadBackground();
        uploadgreen_car();
	}
}
