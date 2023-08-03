<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Order;
use App\Models\Shipping_method;
use App\Models\Payment_method;

class ProductController extends Controller
{
    //
    // public function addProduct(Request $req){
    //     $product = new Product();
    //     $product->name = $req->name;
    //     $product->description = $req->description;
    //     $product->price = $req->price;
    //     $product->branch = $req->branch;
    //     $product->stock_quantity = $req->stock_quantity;
    //     $product->image = $req->image;

    //     $product->save();
    //     return ["result" => "successfully saved in DB"];
    // }

    public function getProduct(){
        $product = Product::all();
        return $product;
    }

    public function addProductToCart(Request $req){
        try{
            $order = new Order();
            $order->product_id = $req->product_id;
            $order->client_size = $req->client_size;
            $order->client_gender = $req->client_gender;
            $order->quantity = $req->quantity;
            $order->payment_method_id = $req->payment_method_id;
            $order->shipping_method_id = $req->shipping_method_id;
            $order->address_id = $req->address_id;
            $order->user_id = $req->user_id;
    
            $order->save();
            return "successfully saved in DB". $order;
        }catch(\Exception $e){
            \log::error($e);
            return response()->json(['error' => 'Something went wrong'], 500);
        }

    }

    public function addShippingMethod(Request $req){
        $shipping = new Shipping_method();
        $shipping->name = $req->name;
        $shipping->price = $req->price;

        $shipping->save();
        return 'Successfully saved in DB';
    }

    public function addPaymentMethod(Request $req){
        $payment = new Payment_method();
        $payment->name = $req->name;

        $payment->save();
        return 'Successfully saved in DB';
    }
}
