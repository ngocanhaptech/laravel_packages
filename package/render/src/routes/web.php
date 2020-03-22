<?php

Route::group(['namespace' => 'Vccorp\Render\Http\Controllers'], function () {    
    Route::get('/', 'RenderController@index')->name('render');
    Route::get('save_render', 'RenderController@render')->name('save-render');
});