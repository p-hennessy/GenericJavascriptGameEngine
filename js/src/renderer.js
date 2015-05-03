define(['tile'], function(Tile){

	var Renderer = new Class({

		initialize: function(canvas){
			this.canvas = canvas;
			this.context = canvas.getContext('2d');
			this.size = 16;

			this.height = this.canvas.clientHeight;
			this.width = this.canvas.clientWidth;


		},

		clearCanvas: function(){
			this.context.clearRect(0 , 0 , this.height, this.width);
		},

		drawTerrainMap: function(map){
			var img = new Image();
			img.src = 'res/tileset.png';			

			for(var x = 0; x < 50; x++){
				for(var y = 0; y < 50; y++){
					this.drawTile(img, 0, 0, 1, 1, x, y); 
				}
			}

		},

		drawTile: function(img, x, y, w, h, dx, dy){
			this.context.drawImage(
				img,
				x * this.size,
				y * this.size,
				w * this.size,
				h * this.size,
				dx * this.size,
				dy * this.size,
				w * this.size,
				h * this.size
			);

		},

		drawPlayer: function(){	
			var img = new Image();
			img.src = 'res/player.png';

			var x = Math.floor( ((this.width / 2) / this.size) / 2);
			var y = Math.floor( ((this.height / 2) / this.size) / 2);

			this.drawEntity(img, 0, 0, 16, 20, x, y); 


		},

		drawEntity: function(img, x, y, w, h, dx, dy){
			this.context.drawImage(
				img,
				x * this.size,
				y * this.size,
				w,
				h,
				dx * this.size,
				(dy * this.size) - (h - this.size),
				w,
				h
			);

		}


	});

	return Renderer;
});
