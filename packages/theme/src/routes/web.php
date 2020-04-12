<?php

Route::group(['namespace' => 'Vccorp\Theme\Http\Controllers'], function () {    
    Route::get('/', 'ThemeController@index')->name('index');
    Route::get('/elements', 'ThemeController@elements')->name('elements');
    Route::get('/cloud-server/index.html', 'ThemeController@cloudServer')->name('cloud-server');
    Route::get('/cloud-server/bang-gia.html', 'ThemeController@cloudServerPricing')->name('cloud-server-pricing');
    Route::get('/cdn/index.html', 'ThemeController@cdn')->name('cdn');
    // Route::get('/ten-page', function () {
    //     return view('theme::ten-page');
    // })->name('ten-page');
});