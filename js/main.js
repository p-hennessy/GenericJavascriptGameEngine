define(['lib/class', 'lib/jquery'], function() {
    require(["src/game"], function(Game){
		
		var game = new Game();
		game.start();
		
	
	});
});








// Sprite
// Player
// Trainers
// Nature

// Tile
// Terrain
// Buildings








var Sprite = function(src){
	this.image = new Image();
	this.image.src = src;

	this.height = 20;
	this.width = 16;

	this.frame = 0;

	this.animating = false;

	this.direction = 0;

	this.render = function(ctx, x, y){
		if(this.animating){
			if(this.frame >= 3){
				this.frame = 0;	
			}
			else{
				this.frame++;
			}
		}

		ctx.drawImage(
			this.image,
			0 + this.frame * this.width,
			this.direction * this.height,
			this.width,
			this.height,
			x, 
			y - 4,
			this.width,
			this.height
		);	
	}
	this.animateStart = function(){
		this.animating = true;
	}
	this.animateStop = function(){
		this.animating = false;
		this.frame = 0;
	}
}

var Player = new Sprite('res/player.png');




var getMatrix = function(numrows, numcols, initial){
	var arr = [];
	for (var i = 0; i < numrows; ++i){
		var columns = [];
		for (var j = 0; j < numcols; ++j){
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

var dx = 0;
var dy = 0;

var down = false;
var up = false;
var left = false;
var right = false;

document.onkeydown = function(e)
{
	var key = e.which;

	//Down
	if(key == "40" || key == "83"){
		left = right = up = false;
		down = true;

		Player.direction = 0;
		Player.animateStart();
	}

	//Left
	if(key == "37" || key == "65"){
		up = down = right = false;
		left = true;
		Player.direction = 1;
		Player.animateStart();
	}

	//Right
	if(key == "39" || key == "68"){
		up = down = left = false;
		right = true;
		Player.direction = 2;
		Player.animateStart();
	}

	//Up
	if(key == "38" || key == "87"){
		left = right = down = false;
		up = true;
		Player.direction = 3;
		Player.animateStart();

	}
};

document.onkeyup = function(e)
{
	var key = e.which;
	up = down = left = right = false;
	Player.animateStop();
};



var Game = new function(){

	this.run = function(){
		var term = 0;
		
		var prevTime = Date.now();
		var deltaTime = 0;
		
		while(term < 100000000000000){
			var curTime = Date.now();
			deltaTime = (curTime - prevTime);
			prevTime = Date.now();
						
			while(deltaTime >= 1){
				Screen.render();		
				deltaTime--;
			}
		
			
			term++;
		}
		
		
	}
	
	
	

};

//Game.run();


