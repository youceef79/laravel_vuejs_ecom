<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/cat/{id}','IndexController@listByCat')->name('cats');
Route::get('/product-details/{id}','IndexController@detailpro');
Route::get('/product-attrs/{id}','IndexController@getProductAttrs');
Route::post('/register','UsersController@register');
Route::post('/login','UsersController@login');
Route::get('/logout','UsersController@logout');
Route::post('/addtocart','CartController@addToUserCart');
Route::get('/usercarts/{email}','CartController@userCarts');
Route::delete('/deletecart','CartController@deleteUserCart');
Route::post('/updateusercart','CartController@updateUserCart');
Route::post('/order','OrdersController@order');
Route::post('/coupon','CartController@applyCoupon');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
