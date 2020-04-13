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
        $template = 'cloud-server/index';
        return view($view);
    }
    public function cloudServerPricing()
    {
        $view = "theme::pages.cloud-server-pricing";
        $template = 'cloud-server/bang-gia';
        return view($view);
    }
    public function cdn()
    {
        $view = "theme::pages.cdn";
        $template = 'cdn/index';
        return view($view);
    }
    public function cdnPricing()
    {
        $view = "theme::pages.cdn-pricing";
        $template = 'cdn/bang-gia';
        return view($view);
    }

}
