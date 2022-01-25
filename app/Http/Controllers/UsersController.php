<?php

namespace App\Http\Controllers;

use App\Profile_model;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;

class UsersController extends Controller
{
    public function index(Request $request){
        return view('users.login_register');
    }
    public function register(Request $request){
        /*
        $this->validate($request,[
           'name'=>'required|string|max:255',
            'email'=>'required|string|email|unique:users,email',
            'password'=>'required|min:6|confirmed',
        ]);*/
        /*
        $input_data = array();
        $input_data['name'] = $request->name; 
        $input_data['email'] = $request->email;
        $input_data['password'] = Hash::make($request->password); */ 
        $input_data=$request->all();
        $input_data['password'] = Hash::make($input_data['password']);
        User::create($input_data);
        return response()->json($input_data);
    }
    public function login(Request $request){
        $input_data=$request->all();
        if(Auth::attempt(['email'=>$input_data['email'],'password'=>$input_data['password']])){
            /*
            Session::forget('session_id');
            $session_id=str_random(40);
            Session::put('session_id',$session_id);
            User::where('id',Auth::id())->first()->last_seen_at = Carbon::now()->format('Y-m-d H:i:s');
            User::where('id',Auth::id())->first()->save();
            Session::put('frontSession',$input_data['email']); 
            if ( Auth::user()->isAdmin()) {
               return redirect('admin'); 
            }*/
              $token = \Str::random(40); 
              $input_data['user'] = User::where('id',Auth::id())->first(); 
              $input_data['token'] = json_encode($token);
              //return redirect('/viewcart')
            }
             return response()->json($input_data);
    }
    public function logout(){
        $input_data['logoutObject'] = Auth::logout();
        return response()->json($input_data);
    }
    public function account(){
        $countries=DB::table('countries')->get();
        $user_login=User::where('id',Auth::id())->first();
        return view('users.account',compact('countries','user_login'));
    }
    public function updateprofile(Request $request,$id){
        $this->validate($request,[
            'name' =>'required',
            'email' =>'required',
            'address' =>'required',
            'city' =>'required',
            'mobile' =>'regex:/^[0-9]{10}/u|required',
        ]);
        $input_data=$request->all();
        DB::table('users')->where('id',$id)->update(['name'=>$input_data['name'],
            'email'=>$input_data['email'],
            'address'=>$input_data['address'],
            'city'=>$input_data['city'],
            'state'=>$input_data['state'],
            'country'=>$input_data['country'],
            'pincode'=>$input_data['pincode'],
            'mobile'=>$input_data['mobile']]);
        return back()->with('message','Update Profile already!');
    }
    public function updatepassword(Request $request,$id){
        $oldPassword=User::where('id',$id)->first();
        $input_data=$request->all();
        if(Hash::check($input_data['password'],$oldPassword->password)){
            $this->validate($request,[
               'newPassword'=>'required|min:6|max:12|confirmed'
            ]);
            $new_pass=Hash::make($input_data['newPassword']);
            User::where('id',$id)->update(['password'=>$new_pass]);
            return back()->with('message','Update Password Already!');
        }else{
            return back()->with('oldpassword','Old Password is Inconrrect!');
        }
    }
/*
    protected function authenticated(Request $request, $user)
  {
    $user->last_seen_at = Carbon::now()->format('Y-m-d H:i:s');
    $user->save();
  }
  */
}
