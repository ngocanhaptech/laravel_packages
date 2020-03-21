<?php
namespace Vccorp\Render;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class RenderServiceProvider extends ServiceProvider
{
    public function boot()
    {        
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
        $this->loadViewsFrom(__DIR__.'/views', 'render');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->mergeConfigFrom(
            __DIR__.'/config/render.php', 'render'
        );
        $this->publishes([
            __DIR__.'/config/render.php' => config_path('render.php'),
            __DIR__.'/views' => resource_path('views/vendor/render'),
        ]);
    }

    public function register()
    {
        
    }
}