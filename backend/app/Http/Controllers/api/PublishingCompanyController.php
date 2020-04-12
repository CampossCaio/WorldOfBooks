<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PublishingCompany;

class PublishingCompanyController extends Controller
{
   // Find PublishingCompany
    public function index()

    {
        try{
            return PublishingCompany::all('id', 'name');
        }catch(Exception $error){
            return ['error' => 'error', 'details'=> $error];
        }
    }

   // Create a new PublishingCompany
    public function store(Request $request)
    {
      try{

        $publishingCompany = new PublishingCompany();

        $publishingCompany = PublishingCompany::create($request->all());
        
        return $publishingCompany;

      }catch(Exception $error){
        return ['error' => 'error', 'details'=> $error];
      }
    }

   // Find a PublishingCompany
    public function show($id)
    {
        try{
            $publishingCompany = new PublishingCompany();
            $publishingCompany = PublishingCompany::find($id);

            if(!$publishingCompany) {
                return ['error' => 'publishingCompany does not exist'];
            }

            return $publishingCompany;

        }catch(Exception $error){
            return ['error' => 'error', 'details'=> $error];
        }
    }

    // Update a PublishingCompany
    public function update(Request $request, $id)
    {
        try{
            $publishingCompany = new PublishingCompany();
            $publishingCompany = PublishingCompany::find($id);

            if(!$publishingCompany) {
                return ['error' => 'publishingCompany does not exist'];
            }

         $publishingCompany->update($request->all());

         return $publishingCompany;

        }catch(Exception $error){
            return ['error' => 'error', 'details'=> $error];
        }
    }

    // Delete a PublishingCompany
    public function destroy($id)
    {
        try{
            $publishingCompany = new PublishingCompany();
            $publishingCompany = PublishingCompany::find($id);

            if(!$publishingCompany) {
                return ['error' => 'publishingCompany does not exist'];
            }
            
            $publishingCompany->delete();

        }catch(Exception $error){
            return ['error' => 'error', 'details'=> $error];
        }
    }
}
