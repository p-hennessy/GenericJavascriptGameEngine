//Global variables
var Direction = {
	up: 0,
	right: 1,
	down: 2,
	left: 3
};

//Polyfills
window.requestAnimFrame = (function(){
	return  
		window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		
		function(callback, element){
			window.setTimeout(callback, 1000 / 60);
	};
})();