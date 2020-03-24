<?php

use Vccorp\Render\Helpers\Render;

Route::group(['namespace' => 'Vccorp\Contact\Http\Controllers'], function () {    
    Route::get('contact', 'ContactController@index')->name('contact');
    Route::post('contact', 'ContactController@send');
    Route::get('render-contact', function () {
        return Render::save('contact::index', 'contact');
    });
});