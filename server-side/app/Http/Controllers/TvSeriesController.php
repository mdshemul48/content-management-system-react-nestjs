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
        // return ["pass"=>"Index"];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return ["result"=>"pass"];
        if($request->name == null){
            return response()->json(['error' => 'Name is required'], 400);
        }

        if($request->poster == null){
            return response()->json(['error' => 'Poster is required'], 400);
        }

        if ($request->hasFile('poster')) {
            $file = $request->file('poster');
            $filename = $file->getClientOriginalName();
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

        foreach($request->content as $item){

            $post_details = new Post_details();
            $post_details->post_id = $post->id;
            $post_details->downloadLink = $item->link;
            $post_details->session = $item->seasonName;
            $post_details->episode = $item->title;
            $post_details->part = $item->id;
            $post_details->title = $item->id;
            $post_details->save();
        }


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
