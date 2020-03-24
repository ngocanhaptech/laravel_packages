<?php

namespace Vccorp\Render\Http\Controllers;

use Vccorp\Render\Helpers\Render;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RenderController extends Controller
{
    public function index()
    {
        $exported = [];
        $staticLink = null !== config('render.render_root') ? config('render.render_root') : 'http://localhost:8000/storage/';
        $pages = config('render.render_views');
        foreach ($pages as $template => $view){ 
            array_push($exported, $staticLink . $template . '.html' );
            Render::save($view, $template);
        }
        return $exported;
    }

}
