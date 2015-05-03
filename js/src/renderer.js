define(function(){

	var Renderer = new Class({

		initialize: function(canvas){
			this.canvas = canvas;
			this.context = canvas.getContext('2d');
			this.scale = 2;
			this.size = 16;
		},

		clearCanvas: function(){
			this.context.clearRect(0 , 0 , this.canvas.clientWidth, this.canvas.clientHeight);
		},
		
		drawTerrainMap: function(map){

			var img = new Image();
			img.src = 'res/tileset.png';

			for(var x = 0; x < 50; x++){
				for(var y = 0; y < 50; y++){
					this.drawTile(this.context, img, 0, 0, 1, 1, x, y); 
				}
			}



		},

		drawTile: function(ctx, img, x, y, w, h, dx, dy ){

			ctx.drawImage(
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
		
		drawEntity: function(){
		
		
		}


	});

	return Renderer;
});
