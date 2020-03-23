<?php

Route::group(['namespace' => 'Vccorp\Theme\Http\Controllers'], function () {    
    Route::get('/theme', 'ThemeController@index')->name('index');
});