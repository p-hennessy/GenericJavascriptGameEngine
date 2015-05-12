define(function(){

	var Animation = new Class({
		initialize: function(name, length, row, width, height){
			this.name = name;
			this.length = length;
			this.row = row;
			this.speed = 128;

			this.width = width;
			this.height = height;

			this.reset();
		},

		tick: function(){
			var i = this.currentFrame.index;

			i = (i < this.length - 1) ? i + 1 : 0;

			this.currentFrame.x = this.width * i;
			this.currentFrame.y = this.height * this.row;
			this.currentFrame.index = i;
		},

		update: function(time){
			if(this.isTimeToAnimate(time)){
				this.lastTime = time;
				this.tick();
				return true;
			} 
			else{
				return false;
			}
		},

		isTimeToAnimate: function(time){
			return (time - this.lastTime) > this.speed;	
		},

		reset: function(){
			this.lastTime = 0;
			this.currentFrame = { index: 0, x: 0, y: this.row * this.height };
		}
	});

	return Animation;

});