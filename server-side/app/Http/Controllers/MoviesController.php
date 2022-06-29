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
        // Post table validation

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_id' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        // image store on storage folder

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = $file->getClientOriginalName();
            $path = $file->storeAs('public/images', $filename);
        }

        //  store data on post table

        $post = Post::create(array_merge(
            $validator->validated(),
            ['title' => $request->input('title')],
            ['type' => 'movies'],
            ['image' => $path],
            ['category_id' => $request->input('category_id')],
            ['subCategory_id' => $request->input('subCategory_id')],
            ['meta_data' => $request->input('meta_data')],
            ['createdBy' => auth()->user()->id]
        ));

        $post->save();

        // Post_details table validation

        $details = Validator::make($request->all(), [
            'downloadLink' => 'required',
            'post_id' => 'required'
        ]);

        // store data on post_details table

        $post_details = Post_details::create(array_merge(
            $details->validated(),
            ['post_id' => $post->id],
            ['downloadLink' => $request->input('downloadLink')]

        ));

        // json response 

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
        // Post table validation

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_id' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        // image store on storage folder

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = $file->getClientOriginalName();
            $path = $file->storeAs('public/images', $filename);
        }

        //  store data on post table
        $post_id = Post::find($id);

        $post_id->update(array_merge(
            $validator->validated(),
            ['title' => $request->input('title')],
            ['type' => 'movies'],
            ['image' => $path],
            ['category_id' => $request->input('category_id')],
            ['subCategory_id' => $request->input('subCategory_id')],
            ['meta_data' => $request->input('meta_data')],
            ['createdBy' => auth()->user()->id]
        ));

        $post_id->save();

        $details = Validator::make($request->all(), [
            'downloadLink' => 'required',
            'post_id' => 'required'
        ]);

        // store data on post_details table
        $post_details_id = Post_details::where('post_id', $id);
        $post_details_id->update(array_merge(
            $details->validated(),
            ['post_id' => $post_id->id],
            ['downloadLink' => $request->input('downloadLink')]

        ));

        // json response 

        return response()->json([
            'message' => 'Movies Successfully Updated',
            'post_id' => $post_id,
            'post_details_id' => $post_details_id,
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);

        DB::beginTransaction();

        try {
            DB::statement("delete from post_details where post_id=$post->id");
            DB::statement("delete from posts where id=$post->id");
            DB::commit();
            return response()->json(['message' => 'Deleted Successfully'], 201);
        } catch (\Throwable $th) {
            dd($th);
            DB::rollback();
            return response()->json(['message' => 'Something Wrong'], 401);
        }
    }
}
