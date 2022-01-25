<?php

namespace App\Http\Controllers;

use App\Category_model;
use App\ImageGallery_model;
use App\ProductAtrr_model;
use App\Products_model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    public function index(Request $request){
        $products=Products_model::all();
        $categories = \StaticLoader::loadCats();
        $allCategories = Category_model::all();
        $imagesGalleries = ImageGallery_model::all();
        /*
        return Inertia::render('App', [
            'products' => $products,
            'categories' => $categories,
            'allCategories' => $allCategories,
            'imagesGalleries' => $imagesGalleries,
         ]); */
        return view('welcome',compact('products' , 'categories' , 'allCategories' , 'imagesGalleries'));
    }
    public function shop(){
        $products=Products_model::all();
        $byCate="";
         $categories = \StaticLoader::loadCats();
         $category_model = new \App\Category_model();
        return view('welcome',compact('products','byCate' , 'categories', 'category_model'));
    }
    public function listByCat($id){
         $byCate=Category_model::select('name')->where('id',$id)->first();
         if( $byCate == null){
          return view('error/404');
           }
         $list_product=Products_model::where('categories_id',$id)->get();
         $categories = \StaticLoader::loadCats();
         $category_model = new \App\Category_model();
        return view('welcome',compact('list_product','byCate' , 'categories' , 'category_model'));
    }
    public function detailpro($id){

        $detail_product = Products_model::findOrFail($id);
        $imagesGalleries = ImageGallery_model::where('products_id',$id)->get();
        $totalStock = ProductAtrr_model::where('products_id',$id)->sum('stock');
        $relateProducts = Products_model::where([['id','!=',$id],['categories_id',$detail_product->categories_id]])->get();
        $products = Products_model::all();
        $allCategories = Category_model::all();
        $categories = \StaticLoader::loadCats();
         // if($id == 34) die();
         // $result = array();
          // $result["imagesGalleries"] = $imagesGalleries;
          //return response()->json($result);
          return view('welcome',compact('imagesGalleries' , 'detail_product' , 'totalStock', 'relateProducts', 'products' , 'categories' , 'allCategories'));
    }

     public function getProductAttrs($id){
         $detail_product = Products_model::findOrFail($id);
         $productAttrs = ProductAtrr_model::where('products_id',$id)->get();
         $productCat = Category_model::where('id', $detail_product->categories_id)->first();
         $relatedCats = Category_model::where('parent_id', $productCat->id)
               ->orWhere('id', $productCat->parent_id)->get();
         $catIds = array();
         $catIds[] = $productCat->id;
          foreach ($relatedCats as $value) {
            $catIds[] = $value->id; 
           }
         $relatedProducts = Products_model::where('id','!=',$id)->whereIn('categories_id',$catIds)->get();
         $result = array();
         $result["productAttrs"] = $productAttrs;
         $result["relatedProducts"] = $relatedProducts;    
         return response()->json($result); 
    }

    public function getAttrs(Request $request){
        $all_attrs=$request->all();
        //print_r($all_attrs);die();
        $attr=explode('-',$all_attrs['size']);
        //echo $attr[0].' <=> '. $attr[1];
        $result_select=ProductAtrr_model::where(['products_id'=>$attr[0],'size'=>$attr[1]])->first();
        echo $result_select->price."#".$result_select->stock;
    }
}
