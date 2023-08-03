<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ShippingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//user
Route::post('/addUser',[UserController::class, 'addUser']);
Route::get('/getUser',[UserController::class, 'listUsers']);
// Route::put('/update',[UserController::class, 'updateUser']);
// Route::get('/search/{email}',[UserController::class, 'search']);
Route::post("/addUserAddress",[UserController::class, 'addUserAddress']);
Route::get('/listLastestId',[UserController::class, 'listLastestId']);
Route::get("/listUserById",[UserController::class, 'listUserById']);




// product
Route::post('/addProduct',[ProductController::class, 'addProduct']);
Route::get("/getProduct",[ProductController::class, 'getProduct']);
Route::post("/addProductToCart",[ProductController::class, 'addProductToCart']);
Route::post("/addShippingMethod",[ProductController::class, 'addShippingMethod']);
Route::post("/addPaymentMethod",[ProductController::class, 'addPaymentMethod']);

// payment method
Route::get('/listPaymentMethods',[PaymentController::class, 'listPaymentMethods']);

//shipping method
Route::get('/listShippingMethods',[ShippingController::class, 'listShippingMethods']);
