<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Post_details;
use Illuminate\Http\Request;

class TvSeriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if($request->name == null){
            return response()->json(['error' => 'Name is required'], 400);
        }

        if($request->image == null){
            return response()->json(['error' => 'Poster is required'], 400);
        }

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . '.' . $file->extension();
            $path = $file->storeAs('public/images', $filename);
        }



        $post = new Post();

        $post->title = $request->name;
        $post->type = "tvSeries";
        $post->image = $filename;
        $post->createdBy = auth()->user()->id;
        $post->category_id = $request->category_id;
        $post->subCategory_id = $request->subCategory_id;
        $post->meta_data = $request->meta_data;
        $post->save();

        $contents = json_decode($request->contents);

        foreach($contents as $key=>$item){

            foreach($item->episodes as $item_key=>$episodes){

                $post_details = new Post_details();
                $post_details->post_id = $post->id;
                $post_details->downloadLink = $episodes->link;
                $post_details->session = $item->seasonName;
                $post_details->episode = $episodes->title;

                $post_details->save();
            }
        }

        return response()->json([ 'message' => 'TvSeries Successfully Created', 'category' => Post::with('post_details')->find($post->id) ], 201);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tvSeries = Post::with('post_details')->find($id);
        $result = $tvSeries->post_details->groupBy('session');
        $data = [
            'post' => Post::find($id),
            'post_details' => $result,

        ];
        return response()->json($data);

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
