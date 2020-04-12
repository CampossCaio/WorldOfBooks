<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Genres;

class GenresController extends Controller
{
   
    public function index()
    {
        return Genres::all('id','name');
    }

    
    public function store(Request $request)
    {
       try{

        $genres =  new Genres();

        $genres = Genres::create($request->all());

        return $genres;
           
       }catch(Exception $error ) {
               return ['error' => 'error', 'details'=> $error];
       }
    }

    
    public function show($id)
    {
        try{

            $genres =  new Genres();

            $genres = Genres::find($id);

            if(!$genres) {
                return ['error'=> 'Genger does not exist'];
            }

            return $genres;
         
        }catch(Exception $error ) {
                return ['error' => 'error', 'details'=> $error];
        }
    }

   
    public function update(Request $request, $id)
    {
        try{

            $genres =  new Genres();

            $genres = Genres::find($id);

            if(!$genres) {
                return ['error'=> 'Genger does not exist'];
            }

            $genres->update($request->all());

            return $genres;

        }catch(Exception $error ) {
                return ['error' => 'error', 'details'=> $error];
        }
    }

  
    public function destroy($id)
    {
        try{

            $genres =  new Genres();

            $genres = Genres::find($id);

            if(!$genres) {
                return ['error'=> 'Genger does not exist'];
            }

            $genres->delete();

        }catch(Exception $error ) {
                return ['error' => 'error', 'details'=> $error];
        }
    }
}
