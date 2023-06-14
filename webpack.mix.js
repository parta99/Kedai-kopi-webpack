const mix = require('laravel-mix');

mix.js('public/js/main.js', 'dist/js')
    .sass('public/css/main.scss', 'dist/css')
    .minify('public/css/main.css');
