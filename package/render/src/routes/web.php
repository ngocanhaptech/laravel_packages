<?php

Route::group(['namespace' => 'Vccorp\Render\Http\Controllers'], function () {    
    Route::get('/render', 'RenderController@index')->name('render');
});