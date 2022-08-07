<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json('Welcome to home page');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getLatestPostByCategory()
    {
        // $category_id = $request->id

        $animation_movies = Post::where('category_id', 1)->latest()->take(6)->get();
        $hindi_movies = Post::where('category_id', 2)->latest()->take(6)->get();
        $south_indian_dubbed = Post::where('category_id', 3)->latest()->take(6)->get();
        $south_indian_movies = Post::where('category_id', 4)->latest()->take(6)->get();
        $hindi_tv_serial = Post::where('category_id', 5)->latest()->take(6)->get();
        $english_movies = Post::where('category_id', 6)->latest()->take(6)->get();
        $english_foreign_hindi_dubbed_movies = Post::where('category_id', 7)->latest()->take(6)->get();
        $foreign_language_movies = Post::where('category_id', 8)->latest()->take(6)->get();
        $english_foreign_tv_series = Post::where('category_id', 9)->latest()->take(6)->get();
        $islamic = Post::where('category_id', 10)->latest()->take(6)->get();
        $software = Post::where('category_id', 11)->latest()->take(6)->get();
        $tutorials = Post::where('category_id', 12)->latest()->take(6)->get();
        $pc_games = Post::where('category_id', 13)->latest()->take(6)->get();
        $android_apps_games = Post::where('category_id', 14)->latest()->take(6)->get();
        $wwe = Post::where('category_id', 15)->latest()->take(6)->get();

        $latest_post = Post::latest()->take(12)->get();

        return response()->json([

            'latest_post' => $latest_post,
            'animation_movies' => $animation_movies,
            'hindi_movies' => $hindi_movies,
            'south_indian_dubbed' => $south_indian_dubbed,
            'south_indian_movies' => $south_indian_movies,
            'hindi_tv_serial' => $hindi_tv_serial,
            'english_movies' => $english_movies,
            'english_foreign_hindi_dubbed_movies' => $english_foreign_hindi_dubbed_movies,
            'foreign_language_movies' => $foreign_language_movies,
            'english_foreign_tv_series' => $english_foreign_tv_series,
            'islamic' => $islamic,
            'software' => $software,
            'tutorials' => $tutorials,
            'pc_games' => $pc_games,
            'android_apps_games' => $android_apps_games,
            'wwe' => $wwe,



        ], 201);
    }
}
