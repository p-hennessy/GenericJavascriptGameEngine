define(['src/tile', 'src/entity', 'src/sprite'], function(Tile, Entity, Sprite){

	var Renderer = new Class({

		initialize: function(canvas){
			this.canvas = canvas;
			this.context = canvas.getContext('2d');
			this.size = 16;

			this.height = this.canvas.clientHeight;
			this.width = this.canvas.clientWidth;
						
			this.player = new Entity( new Sprite('res/player.png', 20, 16) );
			this.player.loadAnimation('walk_left', 4, 3);
		},

		clearCanvas: function(){
			this.context.clearRect(0 , 0 , this.height, this.width);
		},

		drawTerrainMap: function(map){
			var tile = new Tile('res/tileset.png', 0, 0);		

			for(var x = 0; x < 50; x++){
				for(var y = 0; y < 50; y++){
					this.drawTile(tile, x, y); 
				}
			}

		},

		drawTile: function(tile, dx, dy){
			tile.render(this.context, dx, dy);
		},

		drawPlayer: function(time){	
			var x = Math.floor( ((this.width / 2) / this.size) / 2);
			var y = Math.floor( ((this.height / 2) / this.size) / 2);

			this.player.setGridPosition(x, y);
			this.drawEntity(this.player, time);
		},

		drawEntity: function(entity, time){
			var position = entity.getGridPosition();
			var animation = entity.getAnimationFrame(time);
			
			this.context.drawImage(
				entity.sprite.image,
				animation.currentFrame.x,
				animation.currentFrame.y,
				entity.sprite.width,
				entity.sprite.height,
				position.x,
				position.y,
				entity.sprite.width,
				entity.sprite.height
			);

		}


	});

	return Renderer;
});
