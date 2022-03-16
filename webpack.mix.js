let mix = require('laravel-mix');

if (!mix.inProduction()) {
    mix.disableNotifications();
}

mix.js('resources/js/main.js', 'src/js').vue().setPublicPath('src');
mix.sass('resources/scss/main.scss', 'src/css').setPublicPath('src');