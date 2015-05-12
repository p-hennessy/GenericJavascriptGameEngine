define(["src/sprite", "src/animation"], function(Sprite, Animation){

	var Entity = new Class({
		initialize: function(sprite){
			this.sprite = sprite;
			this.setGridPosition(0,0);

			this.animations = {};
			this.currentAnimation = null;
		},

		loadAnimation: function(name, length, row){
			this.animations[name] = new Animation(name, length, row, this.sprite.width, this.sprite.height);
		},
		
		setAnimation: function(name){
			if(this.animations[name])
				this.currentAnimation = this.animations[name];
			else
				console.log('Animation: ' + name + ' not found for entity');
		},

		setGridPosition: function(x, y) {
			this.gridX = x * 16;
			this.gridY = y * 16 - (this.sprite.height - 16);
		},

		getGridPosition: function(){
			return { x: this.gridX, y: this.gridY };	
		},

		getAnimationFrame: function(time){
			this.currentAnimation.update(time);
			
			return this.currentAnimation;
		},
	});

	return Entity;

});