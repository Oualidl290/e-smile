<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PayPalController;

Route::get('heroes', [HeroController::class, 'index']);
Route::get('heroes/{id}', [HeroController::class, 'show']);
Route::post('addh', [HeroController::class, 'store']);
Route::put('heroupdate/{id}', [HeroController::class, 'update']);
Route::delete('herodelete/{id}', [HeroController::class, 'destroy']);


Route::get('products', [ProductController::class, 'index']);
Route::get('products/{id}', [ProductController::class, 'show']);
Route::post('addp', [ProductController::class, 'store']);
Route::put('productupdate/{id}', [ProductController::class, 'update']);
Route::delete('productdelete/{id}', [ProductController::class, 'destroy']);
Route::get('views', [ProductController::class, 'getProductCount']);

Route::get('categories', [CategorieController::class, 'index']);
Route::get('categories/{id}', [CategorieController::class, 'show']);
Route::post('addc', [CategorieController::class, 'store']);
Route::put('categorieupdate/{id}', [CategorieController::class, 'update']);
Route::delete('  /{id}', [CategorieController::class, 'destroy']);


Route::get('orders', [OrderController::class, 'index']);
Route::get('orders/{id}', [OrderController::class, 'show']);
Route::post('addo', [OrderController::class, 'store']);
Route::put('orderupdate/{id}', [OrderController::class, 'update']);
Route::delete('orderdelete/{id}', [OrderController::class, 'destroy']);
Route::get('profit', [OrderController::class, 'calculateTotalProfit']);


Route::get('orderitems', [OrderItemController::class, 'index']);
Route::get('orderitems/{id}', [OrderItemController::class, 'show']);
Route::post('addoi', [OrderItemController::class, 'store']);
Route::put('orderitemupdate/{id}', [OrderItemController::class, 'update']);
Route::delete('orderitemdelete/{id}', [OrderItemController::class, 'destroy']);



Route::get('/random', [ProductController::class, 'randomProduct']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
Route::get('users', [AuthController::class, 'totalusers']);









Route::get('paypal/checkout', [PayPalController::class, 'checkout'])->name('paypal.checkout')->middleware('auth');
Route::get('paypal/status', [PayPalController::class, 'status'])->name('paypal.status')->middleware('auth');
Route::get('paypal/cancel', [PayPalController::class, 'cancel'])->name('paypal.cancel')->middleware('auth');
