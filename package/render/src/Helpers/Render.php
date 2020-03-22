<?php
namespace Vccorp\Render\Helpers;

use Illuminate\Support\Facades\Storage;

class Render {
    public static function index($viewName) {
        $content = view($viewName)->render();
        $filename = str_replace(['::', ' '], '_', $viewName);
        Storage::disk('public')->put(config('render.dist') . preg_replace('/[^A-Za-z0-9\-]/', '-', $filename) . '.html' , $content);
        return view($viewName);
    }
}