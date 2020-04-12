<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Author;
class AuthorController extends Controller
{
    
    //Find all authors
    public function index()
    {
        return Author::all('id', 'name'); 
    }

    // Create a new Author
     public  function store(Request $request)
    {
        try {

            $author = new Author();
        
            $author = Author::create($request->all());
            
            return $author;
    
           } catch(Exception $error ) {
               return ['error' => 'error', 'details'=> $error];
           }
    }
        
    
    // Find a author
    public function show($id, Response $response)
    { 
       $author = new Author();

       $author = Author::findOrFail($id);
       
       return $author;
    
    }

    // Update a author
    public function update(Request $request, $id)
    {

        try{
            $author = new Author();

            $author = Author::find($id);
    
            if(!$author){
                return ['error' => 'author does not exist'];
            }
    
            $author->update($request->all());
    
            return $author;
            
        }catch(Exception $error ) {
            return ['error' => 'error', 'details'=> $error];
        }
      
    }


    public function destroy($id)
    {   
        try{
            
            $author = new Author();

            $author = Author::find($id);

            if(!$author){
                return ['error'=> 'author does not exist'];
            }

            $author->delete();
            

            // Author::destroy($id);

        }catch(Exception $error ){
            return ['error' => 'error', 'details' => $error];
        }
    }
}
