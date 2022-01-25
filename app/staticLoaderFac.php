<?php
namespace App;
use Illuminate\Support\Facades\Facade;

class staticLoaderFac extends Facade 
{   

	protected static function getFacadeAccessor(){
        
        return 'App\StaticLoader'; 
        
 	} 
   
}

