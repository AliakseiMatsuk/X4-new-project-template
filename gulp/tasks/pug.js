'use strict';

module.exports = function() {
    $.gulp.task('pug', function() {
        return $.gulp.src($.config.source.html)
            .pipe($.gp.pug({ 
                locals : {
                    socials: JSON.parse($.fs.readFileSync('./data/socials.json', 'utf8')),
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                    content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8')),
                },
                pretty: true 
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                }
            }))
            .pipe($.gulp.dest($.config.build.html));
    });
};
