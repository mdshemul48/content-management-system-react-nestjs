<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    public function search($titel){
        $result = Post::with('post_details')->where('title','like','%'.$titel.'%')->get();
        // $result = Post::with('post_details')->whereFuzzy('title',$titel)->get();

        // dd($result);
        return response()->json($result);
    }
}
