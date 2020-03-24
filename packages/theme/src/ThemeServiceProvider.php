<?php
namespace Vccorp\Theme;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{
    public function boot()
    {        
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
        $this->loadViewsFrom(__DIR__.'/views', 'theme');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->mergeConfigFrom(
            __DIR__.'/config/theme.php', 'theme'
        );
        $this->publishes([
            __DIR__.'/config/theme.php' => config_path('theme.php'),
            __DIR__.'/views' => resource_path('views/vendor/theme'),
        ]);
    }

    public function register()
    {
    }
}