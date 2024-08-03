<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
class AuthController extends Controller
{
    public function totalusers()
{
    $users = User::count();
    return response()->json(['totalu' => $users]);
}
    public function register(Request $request)
    {
        return User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password'))
        ]);
    }

    public function login(Request $request)
{
    if (!Auth::attempt($request->only('email', 'password'))) {
        return response([
            'Email Or Password Invalid!'
        ], Response::HTTP_UNAUTHORIZED);
    }

    $user = Auth::user();

    // Ensure 'createToken' method is available
    $token = $user->createToken('token')->plainTextToken;

    $cookie = cookie('jwt', $token, 60 * 24); // 1 day

    return response([
        'message' => $token
    ])->withCookie($cookie);
}



    public function user()
    {
        return Auth::user();
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }
}
