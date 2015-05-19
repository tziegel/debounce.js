// debounce.js ~ fires only when browser is ready, lessens script bloat on events like resize and scroll ~ Tim Ziegel ~ 11 27 2012
// v4 ~ Changed timeout implementation to rAF - no longer requires a delay argument ~ 4 15 2015


if ('function' != typeof window.requestAnimationFrame) window.requestAnimationFrame = 
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame    ||
	function(callback) { window.setTimeout(callback, 1000 / 60); };

Function.prototype.debounce = function() {
	var application = this;
	var sleep = false, that = this, args = [];

	return function() {
		that = this;
		args = Array.prototype.slice.call(arguments);
		if (!sleep) window.requestAnimationFrame(function() {
			sleep = false;
			application.apply(that, args);
		});
		sleep = true;
	};
};
