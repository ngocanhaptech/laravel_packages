<?php

namespace Vccorp\Render\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RenderController extends Controller
{
    public function index()
    {
        return view('render::index');
    }

    public function render()
    {
        $html = view('render::index')->render();
        Storage::disk('public')->put(config('render.dist') . 'index.html', $html);
        return view('render::index');
    }

}
