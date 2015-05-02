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


var Tile = function(src, tilemapX, tilemapY, options){
	this.image = new Image();
	this.image.src = src;
	this.size = 16;

	this.settings = $.extend({
		animationFrames: 0,
		variations: 0
	}, options);

	this.animationFrame = 0;
	this.variation = Math.floor(Math.random() * this.settings.variations);

	this.tilemap = {
		x: tilemapX * this.size,
		y: tilemapY * this.size
	}

	this.render = function(ctx, x, y){
		ctx.drawImage(
			this.image,
			this.tilemap.x + ((this.animationFrame * this.size) || (this.variation * this.size)),
			this.tilemap.y,
			this.size,
			this.size,
			x, 
			y,
			this.size,
			this.size
		);	

		this.nextFrame();
	}

	this.nextFrame = function(){
		if(this.animationFrame >= this.settings.animationFrames){
			this.animationFrame = 0;	
		}
		else{
			this.animationFrame++;
		}
	}
};

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

var Screen = new function(){

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	var height = canvas.clientHeight;
	var width = canvas.clientWidth;
	var tileSize = 16;
	var scale = 2;

	this.render = function(){


		var tilemap = getMatrix((width / scale / tileSize), (height / scale / tileSize), null);

		for( var x = 0; x < (width / scale / tileSize); x++){
			for( var y = 0; y <  (height / scale / tileSize); y++){

				if( x == 0 || y == 0 || x == (width / scale / tileSize) - 1 || y == (height / scale / tileSize) - 1)
					tilemap[x][y] = new Tile('res/tileset.png', 6, 0);
				else
					tilemap[x][y] = new Tile('res/tileset.png', 0, 0, {variations: 6});
			}
		}

		setInterval(function(){

			context.clearRect ( 0 , 0 , width, height );

			for( var x = 0; x < (width / scale / tileSize); x++){
				for( var y = 0; y <  (height / scale / tileSize); y++){
					tilemap[x][y].render(context, (x + dx) * tileSize, (y + dy) * tileSize);
				}
			}


			Player.render(context, 9 * 16, 7 * 16);
			
			if(down){
				dy--;
			}
			if(up){
				dy++;
			}
			if(left){
				dx++;	
			}
			if(right){
				dx--;	
			}


		}, 128);



	}


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

/Game.run();


