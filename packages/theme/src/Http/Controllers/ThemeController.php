<?php

namespace Vccorp\Theme\Http\Controllers;

use Vccorp\Theme\Helpers\Theme;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ThemeController extends Controller
{
    public function index()
    {
        return view("theme::index");
    }

    public function elements()
    {
        return view("theme::elements");
    }

    public function cloudServer()
    {
        return view("theme::pages.cloud-server");
    }

}
