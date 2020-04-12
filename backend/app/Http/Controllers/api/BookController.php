<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Books;

class BookController extends Controller
{
    
    public function index()
    {

        $books = Books::all();

        $books->load('author', 'genres', 'publishingCompany');

        return $books;

    }
    
    
   
    public function store(Request $request)
    {

        try{
            $book = new Books();

            $book = Books::create($request->all());
      
            return $book;

        } catch(Exception $error ) {
            return ['error' => 'error', 'details'=> $error];
        }
       

    }

   
    public function show($id)
    {
        try{

            $book = new Books();

            $book = Books::with('author','genres', 'publishingCompany')->get()->where('id', $id);
            
            if(!$book) {
                return ['error' => 'Book does not exist'];
            }

            return $book;

        } catch(Exception $error ) {
            return ['error' => 'error', 'details'=> $error];
        }

    }

  
    public function update(Request $request, $id)
    {
        try{

            $book = new Books();

            $book = Books::find($id);
            
            if(!$book) {
                return ['error' => 'Book does not exist'];
            }

            $book->update($request->all());

            return $book;
            
        } catch(Exception $error ) {
            return ['error' => 'error', 'details'=> $error];
        }

    }

    
    public function destroy($id)
    {
        try{

            $book = new Books();

            $book = Books::find($id);
            
            if(!$book) {
                return ['error' => 'Book does not exist'];
            }

            $book->delete();
            
        } catch(Exception $error ) {
            return ['error' => 'error', 'details'=> $error];
        }
       

    }
}
