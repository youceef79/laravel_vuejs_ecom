<?php

namespace App\Http\Controllers;

use App\Cart_model;
use App\Products_model;
use App\ProductAtrr_model;
use App\Coupon_model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;

class CartController extends Controller
{
    public function index(){
        $session_id=Session::get('session_id');
        $cart_datas=Cart_model::where('session_id',$session_id)->get();
        $total_price=0;
        foreach ($cart_datas as $cart_data){
            $total_price+=$cart_data->price*$cart_data->quantity;
        }
        return view('frontEnd.cart',compact('cart_datas','total_price'));
    }

    public function addToUserCart(Request $request){
        $inputToCart = $request->all();
        Cart_model::create($inputToCart);
        return response()->json($inputToCart);
        //Session::forget('discount_amount_price');
        //Session::forget('coupon_code');
        /*
        if($inputToCart['size']==""){
            return back()->with('message','Please select Size');
        }else{
            $stockAvailable=DB::table('product_att')->select('stock','sku')->where(['products_id'=>$inputToCart['products_id'],
                'price'=>$inputToCart['price']])->first();
            if($stockAvailable->stock>=$inputToCart['quantity']){
                $inputToCart['user_email']='weshare@gmail.com';
                $session_id=Session::get('session_id');
                if(empty($session_id)){
                    $session_id=str_random(40);
                    Session::put('session_id',$session_id);
                }
                $inputToCart['session_id']=$session_id;
                $sizeAtrr=explode("-",$inputToCart['size']);
                $inputToCart['size']=$sizeAtrr[1];
                $inputToCart['product_code']=$stockAvailable->sku;
                $count_duplicateItems=Cart_model::where(['products_id'=>$inputToCart['products_id'],
                    'product_color'=>$inputToCart['product_color'],
                    'size'=>$inputToCart['size']])->count();
                if($count_duplicateItems>0){
                    return back()->with('message','This Item Added already');
                }else{
                    Cart_model::create($inputToCart);
                    return back()->with('message','Add To Cart Already');
                }
            }else{
                return back()->with('message','Stock is not Available!');
            }
        }*/
    }
    public function deleteUserCart(Request $request){
        $data = $request->all();

        $delete_item = Cart_model::where(['products_id'=> $data['products_id'],
                'user_email' => $data['user_email']])->first();
        //Session::forget('discount_amount_price');
        //Session::forget('coupon_code');
        $delete_item->delete();
        return response()->json($delete_item);
    }
    public function updateQuantity($id,$quantity){
        Session::forget('discount_amount_price');
        Session::forget('coupon_code');
        $sku_size=DB::table('cart')->select('product_code','size','quantity')->where('id',$id)->first();
        $stockAvailable=DB::table('product_att')->select('stock')->where(['sku'=>$sku_size->product_code,
            'size'=>$sku_size->size])->first();
        $updated_quantity=$sku_size->quantity+$quantity;
        if($stockAvailable->stock>=$updated_quantity){
            DB::table('cart')->where('id',$id)->increment('quantity',$quantity);
            return back()->with('message','Update Quantity already');
        }else{
            return back()->with('message','Stock is not Available!');
        }

}
    public function userCarts($email){
        $cart_datas= Cart_model::where('user_email',$email)->get();
        $input_data = array();
        foreach ($cart_datas as $value) {
        $cartItem = array();
        $product = Products_model::where('id',$value->products_id)->first();
        $cartItem['product'] = $product;
        $cartItem['size'] = $value->size;
        $cartItem['price'] = $value->price;
        $cartItem['quantity'] = $value->quantity;
        $input_data[] = $cartItem;
        }
        return response()->json($input_data);
    }
    public function updateUserCart(Request $request) {
         $data = $request->all();
         $input_data = Cart_model::where(['products_id'=> $data['products_id'],
                'user_email' => $data['user_email']])->update(['quantity' => $data['quantity']]);
        return response()->json($data);
    }
    public function applyCoupon(Request $request){
        $data = $request->all();
        $coupon = Coupon_model::where('coupon_code',$data['coupon'])->first();
        $out = array();
        if($coupon && $coupon->status==0){  
          $out['status'] = true;
          Coupon_model::where(['coupon_code'=>$data['coupon']])->update(['status'=>1]);
          $out['amount'] = $coupon->amount; 
          $out['ex'] = !Carbon::parse($coupon->expiry_date)->gte(Carbon::now()); 
        } else {
         $out['status'] = false;
        }
        return response()->json($out);
    }
}
