<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


    Route::apiResources([
        'authors' => 'api\AuthorController',
        'publishingCompany' => 'api\PublishingCompanyController',
        'genres' => 'api\GenresController',
        'books' => 'api\BookController'
    ]);

   