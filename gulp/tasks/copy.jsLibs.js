'use strict';

module.exports = function() {
    $.gulp.task('copy:jsLibs', function() {
        return $.gulp.src($.config.source.jsLibs, { since: $.gulp.lastRun('copy:jsLibs') })
            .pipe($.gulp.dest($.config.build.jsLibs));
    });
};
