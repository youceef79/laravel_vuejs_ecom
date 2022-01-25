<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category_model extends Model
{
    protected $table='categories';
    protected $primaryKey='id';
    protected $fillable=['parent_id','name','description','url','status'];

    public function sub_categories($id){

         $sub_categories = \DB::table('categories')->select('id','name')->where([['parent_id',$id],['status',1]])->get();
        return $sub_categories;
    }

}
