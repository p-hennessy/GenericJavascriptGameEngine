define(["src/sprite", "src/animation"], function(Sprite, Animation){

	var Entity = new Class({
		initialize: function(sprite){
			this.sprite = sprite;
			this.setGridPosition(0,0);
			this.direction = Direction.left;

			this.animations = [];
			this.currentAnimation = null;
			this.animationX = 0;
			this.animationY = 0;

		},

		getAnimationFrame: function(time){
			this.currentAnimation = this.animations[0];
			this.currentAnimation.update(time);
			
			return this.currentAnimation;
		},
		
		loadAnimation: function(name, length, row){
			this.animations.push(new Animation(name, length, row, this.sprite.width, this.sprite.height));
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