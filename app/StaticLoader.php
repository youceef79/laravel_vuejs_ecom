<?php

namespace App;

class StaticLoader 
{   

	public function loadCats(){

        $categories = \DB::table('categories')->where([['status',1],['parent_id',0]])->get();
        return $categories;
    }
   
}

