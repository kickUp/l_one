// gulp, plugins
var
    gulp = require("gulp"),
    sass = require('gulp-sass'),
    newer = require("gulp-newer"),
    vulcanize = require("gulp-vulcanize"),
    del = require("del");
//file location
var
    source = "./",
    dest = "./build/",

    PATH = {
        stylesheets: {
            sass: __dirname + "/public/stylesheets/sass/",
            css: __dirname + "/build/public/stylesheets/"
        },

        images : { in : source + "public/images/**/*",
                out: dest + "images"
        },

        javascript : { in : source + "public/javascripts/*",
                out: dest + "javascripts"
        },

        custom_tags : { in : source + "views/custom_tags.html",
                out: dest,
                components: { 
                    in : source + "views/components/*"
                }
        }
    },

    vulcanizePolymer = { 
    	in : source + "views/polymer_dependency.html",
        out: dest
    };

gulp.task('sass', function() {
    gulp.src(PATH.stylesheets.sass + '*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(PATH.stylesheets.css));
});


gulp.task('sass:watch', function() {
    gulp.watch(PATH.stylesheets.sass + '/*.scss', ['sass']);
});
 


// gulp.task("javascript", function() {
//     return gulp.src(js.in)
//         .pipe(newer(js.out))
//         .pipe(gulp.dest(js.out));
// });


// gulp.task("images", function() {
//     return gulp.src(images.in)
//         .pipe(newer(images.out))
//         .pipe(gulp.dest(images.out));
// });


// gulp.task("clean", function() {
//     del([dest]);
// });


// gulp.task("custom_tags", function() {
//     return gulp.src(custom_tags.in)
//         .pipe(vulcanize({
//             abspath: '',
//             excludes: [],
//             stripExcludes: false
//         }))
//         .pipe(gulp.dest(custom_tags.out));
// });


// gulp.task("vulcanizePolymer", function() {
//     return gulp.src(vulcanizePolymer.in)
//         .pipe(newer(vulcanizePolymer.out))
//         .pipe(vulcanize({
//             abspath: '',
//             excludes: [],
//             stripExcludes: false
//         }))
//         .pipe(gulp.dest(vulcanizePolymer.out));
// });
// gulp.task("default", ['custom_tags', 'vulcanizePolymer']);

// gulp.watch(custom_tags.components.in, ['custom_tags']);

// Добавить browsersync gulp plugin to autoreload page
