<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('tasks', 'App\Http\Controllers\TaskController@index');
Route::post('create', 'App\Http\Controllers\TaskController@create');
Route::get('edit/{id}', 'App\Http\Controllers\TaskController@edit');
Route::post('update/{id}', 'App\Http\Controllers\TaskController@update');
Route::delete('delete/{id}', 'App\Http\Controllers\TaskController@delete');