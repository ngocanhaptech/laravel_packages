const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('packages/theme/src/resources/js/app.js', 'public/assets/js')
    .js('packages/theme/src/resources/js/price.js', 'public/assets/js')
    .js('packages/theme/src/resources/js/bang-gia-cloud-server.js', 'public/assets/js')
    .sass('packages/theme/src/resources/sass/app.scss', 'public/assets/css')
    .sass('packages/theme/src/resources/sass/theme.scss', 'public/assets/css')
    .sass('packages/theme/src/resources/sass/pages/elements_layout.scss', 'public/assets/css/pages/')
    .sass('packages/theme/src/resources/sass/pages/home_page.scss', 'public/assets/css/pages/')
    .sass('packages/theme/src/resources/sass/pages/cloud-server_page.scss', 'public/assets/css/pages/')
    .sass('packages/theme/src/resources/sass/pages/cdn_page.scss', 'public/assets/css/pages/')
    .copyDirectory('packages/theme/src/assets', 'public/assets');
