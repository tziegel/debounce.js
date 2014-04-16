debounce.js
===========

Reduces script bloat on function calls made in quick succession.

Usage:
======
```javascript
// var debounced_function = regular_function.debounce(ms_to_delay);
var my_cool_function = function() { console.log('hi');  };
document.addEventListener('resize', my_cool_function.debounce(1000), false);
```

In this example: while the window is being resized, "my_cool_function" will fire using the following rules:

  - Once immediately,
  - Once every 1000ms while resizing,
  - Once after you've finished resizing.

You can still call "my_cool_function" normally.
Only debounced functions will exhibit the above rules.
