define(["src/sprite", "src/animation"], function(Sprite, Animation){

	var Entity = new Class({
		initialize: function(sprite){
			this.sprite = sprite;
			this.setGridPosition(0,0);
			this.direction = Direction.down;

			this.animationX = 0;
			this.animationY = 0;

		},

		updateAnimation: function(time){			
			if(time - this.lastTick < 100){
				return;
			}

			if(this.animationX >= 3){
				this.animationX = 0;
			}
			else
				this.animationX++;

			this.lastTick = Date.now();

		},

		setGridPosition: function(x, y) {
			this.gridX = x * 16;
			this.gridY = y * 16 - (this.sprite.height - 16);
		},

		getGridPosition: function(){
			return { x: this.gridX, y: this.gridY };	
		}
	});

	return Entity;

});