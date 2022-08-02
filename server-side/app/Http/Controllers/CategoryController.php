<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;
use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Exception;



class CategoryController extends Controller
{

    public function __construct()
    {
        $this->middleware(
            'auth:api',
            ['except' => ['getAllCategoryInfo', 'getSubCategory', 'getAllPostByCategory', 'getPostByID']]
        );
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
        if (auth()->user()) {

            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'type' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors()->toJson(), 400);
            }

            //$created_by = auth()->user()->id;
            $category = Category::create(array_merge(
                $validator->validated(),
                ['parent_id' => $request->input('parent_id')],
                ['type' => $request->input('type')],
                ['createdBy' => $request->input('createdBy')]
            ));
            return response()->json([
                'message' => 'category Successfully Created',
                'category' => $category
            ], 201);
        } else {
            return response()->json(['error' => 'Unauthorized User'], 401);
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
        if (auth()->user()) {

            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'type' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors()->toJson(), 400);
            }

            $category_id = Category::find($id);
            $category_id->update([
                $validator->validated(),
                'name' => $request->input('name'),
                'type' => $request->input('type'),
                'parent_id' => $request->input('parent_id')


            ]);
            return response()->json([
                'message' => 'category Successfully Updated',
                'category' => $category_id
            ], 201);
        } else {
            return response()->json(['error' => 'Unauthorized User'], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (auth()->user()) {
            $category = Category::find($id);
            $category->delete();
            return response()->json(['message' => 'Deleted Successfully'], 201);
        } else {
            return response()->json(['error' => 'Unauthorized User'], 401);
        }
    }

    public function getAllCategoryInfo()
    {

        $category = Category::with('subCategory')->where('type', 'mainCategory')->get();
        return response()->json($category);
    }

    public function getSubCategory($id)
    {
        $categoryWithSubCategory = Category::with('subCategory')->where('id', $id)->first();

        return response()->json($categoryWithSubCategory);
    }


    public function getAllPostByCategory(Request $request)


    {
        if ($request->mainCategory && $request->subCategory) {
            $allPostByCategory = Post::where('category_id', $request->mainCategory)
                ->where('subCategory_id', $request->subCategory)
                ->paginate(100);
        } elseif ($request->mainCategory) {
            $allPostByCategory = Post::where('category_id', $request->mainCategory)
                ->paginate(100);
        } elseif ($request->subCategory) {
            $allPostByCategory = Post::where('subCategory_id', $request->subCategory)
                ->paginate(100);
        }

        return response()->json($allPostByCategory);
    }

    public function getPostByID($id)
    {
        $getPostByID = Post::with('post_details')->find($id);
        return response()->json($getPostByID);
    }
}
