<?php

namespace App\Http\Controllers;

use App\Cart_model;
use App\Orders_model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Exception;

class OrdersController extends Controller
{
    public function index(){
        $session_id=Session::get('session_id');
        $cart_datas=Cart_model::where('session_id',$session_id)->get();
        $total_price=0;
        foreach ($cart_datas as $cart_data){
            $total_price+=$cart_data->price*$cart_data->quantity;
        }
        $shipping_address=DB::table('delivery_address')->where('users_id',Auth::id())->first();
        return view('checkout.review_order',compact('shipping_address','cart_datas','total_price'));
    }
    public function order(Request $request){
        $input_data=$request->all();

        \Stripe\Stripe::setApiKey("sk_test_51IHtOdFI2MuECzUkRa1smrpfwCnt0HkgwIhojerFZBa9D9KkIe842EYvMXx7Mg9rDroOfDPQKQJtfdKTDQ6Jh4uD00AXJtvfO3");

        $token = $input_data['stripeToken'];
          $out['input'] = $input_data;

        try{
           $charge = \Stripe\Charge::create([
            'amount' => $input_data['price'],
            'currency' => 'usd',
            'description' => $input_data['desc'],
            'source' => $token,
            'receipt_email' => $input_data['email']
          ]);
           $out['result'] = 'success';
        } catch( Exception $e) {
           $out['result'] = 'failure';
        } 
        $order['name'] = $input_data['name'];
        $order['users_email'] = $input_data['email'];
        $order['address'] = $input_data['address'];
        $order['city'] = $input_data['city'];
        $order['state'] = $input_data['state'];
        $order['grand_total'] = $input_data['price'];
        Orders_model::create($order);

         return response()->json($out);
       // $payment_method=$input_data['payment_method'];
        /*
        if($payment_method=="COD"){
            return redirect('/cod');
        }else{
            return redirect('/paypal');
        }*/
    }
    public function cod(){
        $user_order=Orders_model::where('users_id',Auth::id())->first();
        return view('payment.cod',compact('user_order'));
    }
    public function paypal(Request $request){
        $who_buying=Orders_model::where('users_id',Auth::id())->first();
        return view('payment.paypal',compact('who_buying'));
    }
}
