module.exports = {
    root: './build',
    source: {
        html: './source/template/pages/*.pug',
        js: './source/js/app.js',
        jsLibs: './source/js/_libs/**/*.*',
        css: './source/style/app.scss',
        img: './source/images/**/*.*',
        fonts: './source/fonts/**/*.*',
        spriteImg: './source/sprite/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)',
        spriteImgRetina: './source/sprite/*@2x.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)',
        spriteSvg: './source/sprite/*.svg'

    },
    build: {
        html: './build',
        js: './build/templates/_ares/js',
        jsLibs: './build/templates/_ares/js/libs',
        css: './build/templates/_ares/css',
        img: './build/templates/_ares/images',
        fonts: './build/templates/_ares/fonts',
        spriteImg: './source/images/img',
        spriteCss:'./source/style/common'
    },
    watch: {
        html: './source/template/**/*.pug',
        js: './source/js/**/*.js',
        jsLibs: './source/js/_libs/**/*.js',
        css: './source/style/**/*.scss',
        img: './source/images/**/*.*',
        fonts: './source/fonts/**/*.*',
        spriteImg: './source/sprite/**/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)',
        spriteSvg: './source/sprite/**/*.svg',
        content:'./data/**/*.json'
    },
    autoprefixerConfig: ['last 3 version', '> 1%']
};

