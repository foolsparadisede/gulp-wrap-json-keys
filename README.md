# gulp-json-wrap-keys
Gulp plugin to wrap json keys with dots to json objects.

Install with `npm i --save gulp-json-wrap-keys`

## Usage in Gulpfile:
```js
const  gulp  =  require("gulp");
const  jsonWrapKeys  =  require("gulp-json-wrap-keys");

gulp.task("json", () => {
	return  gulp.src("./example.json")
		.pipe(jsonWrapKeys())
		.pipe(gulp.dest("./dest"));
})
```

## Example
Input:
```json
{
	"App.Log-Out.label": "Log Out",
	"App.Log-In.label": "Log In"
}
```

Output:
```json
{
   "App":{
      "Log-Out":{
         "label":"Log Out"
      },
      "Log-In":{
         "label":"Log In"
      }
   }
}
```

## Local Development

Clone the repository `git clone https://github.com/foolsparadisede/gulp-wrap-json-keys.git`

Install dependencies using npm `npm i`

Run test `npm test`