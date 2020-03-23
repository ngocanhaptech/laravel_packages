<?php
namespace Vccorp\Render\Helpers;

use Illuminate\Support\Facades\Storage;

class Render {
    public static function save($viewName, $filename) {
        $content = view($viewName)->render();
        $filename = isset($filename) ? $filename : str_replace(['::', ' '], '_', $viewName);
        $toPath = config('render.dist') . preg_replace('/[^A-Za-z0-9\-]/', '-', $filename) . '.html';
        Storage::disk('public')->put($toPath , $content);
        return $toPath;
    }
}