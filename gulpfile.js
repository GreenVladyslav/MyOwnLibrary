"use strict";

const gulp = require("gulp"); // 3 первых это стандарт
const webpack = require("webpack-stream");
const browsersync = require("browser-sync"); // авто сервер
const sass = require('gulp-sass')(require('sass')); // для правильно кимполяции (стили)
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");

// const dist = "/Applications/MAMP/htdocs/test"; // Ссылка на вашу папку на локальном сервере
const dist = "./dist"; // куда все скалыдвается

gulp.task("copy-html", () => { // rкопирует html файл и кладет в dist
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-sass", () => { // компилирует все стили которые написаны в препроцессоре sass
    return gulp.src("./src/sass/style.scss")
                .pipe(sass().on('error', sass.logError)) // выкидывает ошибку в терминал
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});

gulp.task("watch", () => { // следим за изменениями 
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
    gulp.watch("./src/sass/**/*.scss", gulp.parallel("build-sass"));
});

gulp.task("build", gulp.parallel("copy-html", "build-js", "build-sass")); // запускает три задачи паралелльно

gulp.task("prod", () => { // gulp-prod
    gulp.src("./src/sass/style.scss")
        .pipe(sass().on('error', sass.logError)) 
        .pipe(postcss([autoprefixer()])) //автопрефиксы
        .pipe(cleanCSS()) // отчитает ссс
        .pipe(gulp.dest(dist)); // кладет в dist

    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build")); // изменения до запука gulp само отслеживает