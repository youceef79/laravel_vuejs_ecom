<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class baseController extends Controller
{
    public function index(Request $request, $id){
    	$var = $id;
    	$var2 = 'aaaaaaaah bon';
    	return view("welcome" , compact("var" , "var2"));
    }

}
