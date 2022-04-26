let mix = require('laravel-mix');
const path = require("path");

if (!mix.inProduction()) {
    mix.disableNotifications();
}

mix.js('resources/js/main.js', 'src/js').vue().setPublicPath('src');
mix.sass('resources/scss/main.scss', 'src/css').setPublicPath('src');

//if added alias and add to webpack.config.js from IDE
mix.alias({
    '@': path.join(__dirname, 'resources/js'),
    '@components': path.join(__dirname, 'resources/js/components'),
    '@pages': path.join(__dirname, 'resources/js/Pages'),
    '@store': path.join(__dirname, 'resources/js/Store'),
    '@sass': path.join(__dirname, 'resources/scss'),
})