Render

View exprot to html file.
Save Render to dist folder.

Setup menual:

- In composer.json/autoload-dev: add package as: '"Vccorp\\Render\\": "packages/render/src/"'
- Go to config/app, Push in to "providers" : '\Vccorp\Render\RenderServiceProvider::class,'
- Add render/config/render.php to render nd save html file:
    'dist' => '',
    'render_root' => 'http://local.bizflycloud.vn:8000/storage/',
    'render_views' => [
        "FrontPage" => "theme::index",
        "Elements" => "theme::elements",
        "ContactPage" => "contact::index"
    ]