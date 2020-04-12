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
        return view($view);
    }

    public function elements()
    {
        $view = "theme::elements";
        $template = 'elements';
        return view($view);
    }

    public function cloudServer()
    {
        $view = "theme::pages.cloud-server";
        $template = 'cloud-server';
        return view($view);
    }
    public function cloudServerPricing()
    {
        $view = "theme::pages.cloud-server";
        $template = 'cloud-server';
        return view($view);
    }

}
