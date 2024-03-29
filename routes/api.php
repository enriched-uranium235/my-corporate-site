<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

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

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function() {
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::get('/staff_list', '\App\Http\Controllers\API\StaffController@index');
Route::post('/staff_add', '\App\Http\Controllers\API\StaffController@create');
Route::get('/staff_detail/{id}', '\App\Http\Controllers\API\StaffController@get');
Route::post('/staff_edit/{id}', '\App\Http\Controllers\API\StaffController@update');
Route::post('/staff_delete/{id}', '\App\Http\Controllers\API\StaffController@delete');