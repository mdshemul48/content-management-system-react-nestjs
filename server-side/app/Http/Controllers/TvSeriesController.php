<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Post_details;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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


        DB::beginTransaction();
        try{

            $post = new Post();
            $post->title = $request->name;
            $post->type = $request->type;
            $post->image = $filename;
            $post->createdBy = auth()->user()->id;

            $post->meta_data = $request->meta_data;
            $post->save();

            $split_categories = explode(',', $request->category_id);
            foreach($split_categories as $category){
                $category_post = DB::table('category_post')->insert([
                        'category_id' => $category,
                        'post_id' => $post->id,
                    ]);
            }

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

            DB::commit();

            $afte_save_post = Post::with('post_details')->find($post->id);
            $after_save_post_details_groupBy = $afte_save_post->post_details->groupBy('session');
            $new_post_details = [];
            foreach($after_save_post_details_groupBy as $key=>$item){
            $new_post_details[]= [
                    'seasonName' => $key,
                    'episodes' => $item
                ];
            }
            $data = [
                'post' => Post::find($post->id),
                'post_details' => $new_post_details
            ];

            return response()->json([ 'message' => 'Post Successfully Created', 'data' => $data ], 201);

        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e], 400);
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
        $tvSeries = Post::with('post_details')->find($id);
        $result = $tvSeries->post_details->groupBy('session');
        $new_data = [];
        foreach($result as $key=>$item){
            $new_data[] = [
                'seasonName' => $key,
                'episodes' => $item
            ];
        }
        $data = [
            'post' => Post::find($id),
            'post_details' => $new_data

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


        DB::beginTransaction();
        try{

            $post = Post::find($id);
            $post->title = $request->name;
            $post->type = $request->type;
            $post->image = $filename;
            $post->createdBy = auth()->user()->id;
            $post->meta_data = $request->meta_data;
            $post->save();

            // delete old category_post
            DB::table('category_post')->where('post_id', $id)->delete();
            $split_categories = explode(',', $request->category_id);
            foreach($split_categories as $category){
                $category_post = DB::table('category_post')->insert([
                        'category_id' => $category,
                        'post_id' => $post->id,
                    ]);
            }

            // delete old post_details
            DB::table('post_details')->where('post_id', $id)->delete();
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

            DB::commit();

            $afte_save_post = Post::with('post_details')->find($post->id);
            $after_save_post_details_groupBy = $afte_save_post->post_details->groupBy('session');
            $new_post_details = [];
            foreach($after_save_post_details_groupBy as $key=>$item){
            $new_post_details[]= [
                    'seasonName' => $key,
                    'episodes' => $item
                ];
            }
            $data = [
                'post' => Post::find($post->id),
                'post_details' => $new_post_details
            ];

            return response()->json([ 'message' => 'Post Successfully Updated', 'data' => $data ], 201);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e], 400);
        }

    }


    public function destroy($id)
    {
        try{
            Post::find($id)->delete();
            DB::table('category_post')->where('post_id', $id)->delete();
            DB::table('post_details')->where('post_id', $id)->delete();
            return response()->json(['message' => 'Post Successfully Deleted'], 201);
        }catch(\Exception $e){
            return response()->json(['error' => $e], 400);
        }

    }
}
