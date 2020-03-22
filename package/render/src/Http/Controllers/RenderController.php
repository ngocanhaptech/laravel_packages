<?php

namespace Vccorp\Render\Http\Controllers;

use Vccorp\Render\Helpers\Render;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RenderController extends Controller
{
    public function index()
    {
        return view('render::index');
    }

    public function render()
    {
        return Render::index('render::index');
    }

}
