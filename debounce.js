// debounce.js ~ fires once every x ms, lessens script bloat on events like resize and scroll ~ Tim Ziegel ~ 11/27/2012

if (!Date.now) Date.now = function() { return +new Date; };
if (!Function.prototype.debounce) Function.prototype.debounce = function(time) {
	if ('number' != typeof time) time = 300;
	var application = this, timeout = null, lastInvocation = 0;
	return function() {
		if (null == timeout) {
			var that = this, args = Array.prototype.slice.call(arguments), now = Date.now();
			if (now - lastInvocation > time) application.apply(that, args);
			timeout = setTimeout(function() { application.apply(that, args); timeout = null; lastInvocation = Date.now(); }, time);
		}
	};
};
