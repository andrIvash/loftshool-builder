'use strict';
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');


module.exports = function() {
  $.gulp.task('js.process', function() {
    return $.gulp.src('source/js/app.js')
         .pipe(gulpWebpack(require('../../webpack.config.js'),webpack))
         .on('error', function(){
            this.emit("end");
         })
         .on('error', $.gp.notify.onError({title: "Webpack error"}))
         .pipe($.gulp.dest('./build'));
  })
};
