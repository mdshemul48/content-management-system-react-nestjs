<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    public function search($title)
    {
        $result = Post::with('post_details')->where('title', 'like', '%' . $title . '%')->get();

        // dd($result);
        return response()->json($result);
    }
}
