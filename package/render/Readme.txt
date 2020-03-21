Render

View exprot to html file.
Save Render to dist folder.

Setup menual:

- In composer.json/autoload-dev: add package as: '"Vccorp\\Render\\": "package/render/src/"'
- Go to config/app, Push in to "providers" : '\Vccorp\Render\RenderServiceProvider::class,'
- Add config to save html file:
    'public_pages' => [
        'driver' => 'local',
        'root'   => public_path() . '/pages',
    ],