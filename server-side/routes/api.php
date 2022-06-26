<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware'=>'api','namespace' => 'App\Http\Controllers', 'prefix'=> 'admin'],function($router){
    Route::post('/register',[AuthController::class, 'register']);
    Route::post('/login',[AuthController::class, 'login']);
    Route::get('/dashboard',[DashboardController::class, 'index']);
    Route::post('/categoryCreate',[CategoryController::class, 'store']);
    Route::post('/categoryUpdate/{id}',[CategoryController::class, 'update']);
    Route::post('/categoryDelete/{id}',[CategoryController::class, 'destroy']);
    Route::get('/allcategoryInfo',[CategoryController::class, 'getAllCategoryInfo']);

});

Route::post('/userCreate',[UserController::class, 'store']);
Route::post('/userUpdate/{id}',[UserController::class, 'update']);
Route::post('/userDelete/{id}',[UserController::class, 'destroy']);