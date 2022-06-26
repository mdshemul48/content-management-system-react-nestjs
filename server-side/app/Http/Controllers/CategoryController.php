<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;
use App\Models\Category;
use Exception;



class CategoryController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['error' => 'somethig wring']);
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
            $category = Category::create(array_merge(
                $validator->validated(),
                ['parent_id' => $request->input('parent_id')],
                ['type' => $request->input('type')]
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
            return response()->json([
                'category' => $category 
            ]);
  


    }
}
