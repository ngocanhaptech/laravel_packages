<?php

namespace Vccorp\Theme\Http\Controllers;

use Vccorp\Theme\Helpers\Theme;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Vccorp\Render\Helpers\Render;

class ThemeController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function index()
    {
        $view = "theme::index";
        $template = 'index';
        // Render::save($view, $template);
        return view($view);
    }

    public function elements()
    {
        $view = "theme::elements";
        $template = 'elements';
        // Render::save($view, $template);
        return view($view);
    }

    public function cloudServer()
    {
        // $cloudServerPartners = [];
        // foreach(glob('./assets/images/cloud-server/partners/*.*') as $filename) {
        //     echo 'test : ' . $filename . "\r\n";
        // }
        $view = "theme::pages.cloud-server";
        $template = 'cloud-server';
        // Render::save($view, $template);
        return view($view);
    }

}
