<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;
use App\Models\Post;
use App\Models\Post_details;
use App\Models\User;
use App\Models\Category;

class MoviesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'type' => 'required',
            'image' => 'required',
            'category_id' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $post = Post::create(array_merge(
            $validator->validated(),
            ['title' => $request->input('title')],
            ['type' => 'movies'],
            ['image' => $request->input('image')],
            ['category_id' => $request->input('category_id')],
            ['subCategory_id' => $request->input('subCategory_id')],
            ['meta_data' => $request->input('meta_data')],
            ['createdBy' => auth()->user()->id]
        ));

        $post->save();

        $details = Validator::make($request->all(), [
            'downloadLink' => 'required',
            'post_id' => 'required'
        ]);

        $post_details = Post_details::create(array_merge(
            $details->validated(),
            ['post_id' => $post->id],
            ['downloadLink' => $request->input('downloadLink')]

        ));


        return response()->json([
            'message' => 'Movies Successfully Created',
            'posts' => $post,
            'post_details' => $post_details,
        ], 201);
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
}
