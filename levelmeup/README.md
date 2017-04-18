# Level Me Up

```
npm install -g levelmeup
```

https://github.com/workshopper/levelmeup/issues/109

Hi,

Attempting the first lesson and i have this module defined as '01-level-module.js'

`module.exports.someFunction = function someFunction(x,y,callback) {
  callback(null,"ALL YOUR "+x+" ARE BELONG TO "+y);
}
`

and my client code in '01-level.js' is

`var levelme = require("./01-level-module.js");

levelme.someFunction(process.argv[2],process.argv[3],function(err,result) {
	if(err) {
		return console.error(err);
	}
	console.log(result);
});`

When i run "levelmeup verify 01-level.js" using node v6.10.1, i get this error

`# LEVEL ME UP SCOTTY!

## ALL YOUR BASE (Exercise 1 of 12)

ALL YOUR verify ARE BELONG TO 01-level.js
 # FAIL Your solution to ALL YOUR BASE didn't pass. Try again!


    Error while running run, cause:

    Error: The module doesn't return a function
        at createErrorTemplate (/usr/lib/node_modules/levelmeup/node_modules/exec-module/lib/createErrorTemplate.js:16:15)
        at Timeout._onTimeout (/usr/lib/node_modules/levelmeup/node_modules/exec-module/lib/execAsync.js:32:19)
        at ontimeout (timers.js:380:14)
        at tryOnTimeout (timers.js:244:5)
        at Timer.listOnTimeout (timers.js:214:5)

─────────────────────────────────────────────────────────────────────────────
`

The full error is

`Could not run: Error while running run, cause:

Error: {error.mod.not_function}
    at createErrorTemplate (/usr/lib/node_modules/levelmeup/node_modules/exec-module/lib/createErrorTemplate.js:16:15)
    at Timeout._onTimeout (/usr/lib/node_modules/levelmeup/node_modules/exec-module/lib/execAsync.js:32:19)
    at ontimeout (timers.js:380:14)
    at tryOnTimeout (timers.js:244:5)
    at Timer.listOnTimeout (timers.js:214:5)
Could not run: Error while running run, cause:

Error: {error.mod.not_function}
    at createErrorTemplate (/usr/lib/node_modules/levelmeup/node_modules/exec-module/lib/createErrorTemplate.js:16:15)
    at Timeout._onTimeout (/usr/lib/node_modules/levelmeup/node_modules/exec-module/lib/execAsync.js:32:19)
    at ontimeout (timers.js:380:14)
    at tryOnTimeout (timers.js:244:5)
    at Timer.listOnTimeout (timers.js:214:5)`

Can anybody suggest what I'm doing wrong?
