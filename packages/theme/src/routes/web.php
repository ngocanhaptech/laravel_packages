<?php

Route::group(['namespace' => 'Vccorp\Theme\Http\Controllers'], function () {    
    Route::get('/', 'ThemeController@index')->name('index');
    Route::get('/elements', 'ThemeController@elements')->name('elements');
    Route::get('/cloud-server', 'ThemeController@cloudServer')->name('cloud-server');
});