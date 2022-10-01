<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GamesController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\MoviesController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\SoftwareController;
use App\Http\Controllers\TutorialsController;
use App\Http\Controllers\TvSeriesController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
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

//Protected route

Route::group(['middleware' => 'api', 'namespace' => 'App\Http\Controllers', 'prefix' => 'admin'], function ($router) {


    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::post('/categoryCreate', [CategoryController::class, 'store']);
    Route::put('/categoryUpdate/{id}', [CategoryController::class, 'update']);
    Route::delete('/categoryDelete/{id}', [CategoryController::class, 'destroy']);


    Route::post('/createMovies', [MoviesController::class, 'store']);
    Route::post('/updateMovies/{id}', [MoviesController::class, 'update']);
    Route::delete('/deleteMovies/{id}', [MoviesController::class, 'destroy']);

    Route::post('/createGames', [GamesController::class, 'store']);
    Route::put('/updateGames/{id}', [GamesController::class, 'update']);
    Route::delete('/deleteGames/{id}', [GamesController::class, 'destroy']);

    Route::post('/createSoftware', [SoftwareController::class, 'store']);
    Route::post('/updateSoftware/{id}', [SoftwareController::class, 'update']);
    Route::delete('/deleteSoftware/{id}', [SoftwareController::class, 'destroy']);

    Route::post('/createTutorials', [TutorialsController::class, 'store']);
    Route::post('/updateTutorials/{id}', [TutorialsController::class, 'update']);
    Route::delete('/deleteTutorials/{id}', [TutorialsController::class, 'destroy']);

    //Tv series
    // Route::apiResource('tvSeries', TvSeriesController::class);
    Route::post('/postCreate', [TvSeriesController::class, 'store']);
    Route::get('/postShow/{id}', [TvSeriesController::class, 'show']);
    Route::post('/postUpdate/{id}', [TvSeriesController::class, 'update']);
    Route::delete('/postDelete/{id}', [TvSeriesController::class, 'destroy']);
});

//unprotected route

Route::group(['middleware' => 'api'],  function ($router) {



    Route::get('/allCategoryInfo', [CategoryController::class, 'getAllCategoryInfo']);
    Route::get('/getSubCategory/{id}', [CategoryController::class, 'getSubCategory']);
    Route::get('/getAllPostByCategory', [CategoryController::class, 'getAllPostByCategory']);

    Route::get('/getPost/{id}', [CategoryController::class, 'getPostByID']);
    Route::get('/search/{title}', [PostController::class, 'search']);

    Route::get('/getHomePagePost', [HomepageController::class, 'getHomePagePost']);
    Route::get('/home', [HomepageController::class, 'index']);
    Route::get("/getSuggestion", function (Request $request) {
        $query = $request->query("target");
        $response = Http::get("http://suggestqueries.google.com/complete/search?client=firefox&q=$query");
        return Response()->json($response->json());
    });
});

Route::get('/user', [
    UserController::class, 'getUser'
])->middleware('api');
