const gulp = require("gulp");
const jsonWrapKeys = require("./index");

gulp.task("test", () => {
    return gulp.src("./example.json")
        .pipe(jsonWrapKeys())
        .pipe(gulp.dest("./dist"));
})
