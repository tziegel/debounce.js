debounce.js
===========

Reduces script bloat on function calls made in quick succession.

Usage:
======
```javascript
// var debounced_function = regular_function.debounce();
var my_cool_function = function() { console.log('hi');  };
document.addEventListener('resize', my_cool_function.debounce(), false);
```

When the window is resized, "my_cool_function" will run only when the browser is ready (based on requestAnimationFrame).
You can still call "my_cool_function" normally.
.debounce()-ing a function will return a new (debounced) one - it will not change the original function.
