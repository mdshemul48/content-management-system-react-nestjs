<?php

namespace App\Http\Controllers;

use Dotenv\Validator as DotenvValidator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function register(Request $request)
    {
        if(auth()->user())
        {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|string|email|unique:users',
                'password' => 'required|string|confirmed|min:6'
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors()->toJson(), 400);
            }
            $user = User::create(array_merge(
                $validator->validated(),
                ['password' => bcrypt($request->password)]
            ));
            return response()->json([
                'message' => 'User Successfully registerd',
                'user' => $user
            ], 201);
        }
        else
        {
            return response()->json(['error'=>'Unauthorized'],401);
        }
      
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            
            'email' => 'required|string|email',
            'password' => 'required|string|min:6'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if(!$token=auth()->attempt($validator->validated()))
        {
            return response()->json(['error'=>'Unauthorized'],401);
            
        }
        return $this->createNewToken(($token));
    }

    public function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL()*60,
            'user' => auth()->user()
        ]);
    }
}
