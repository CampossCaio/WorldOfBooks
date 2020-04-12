<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    protected $fillable = [
        'title',
        'release_year',
        'author_id',
        'genres_id',
        'publishing_company_id'
    ];

    public function author()
    {
        return $this->belongsTo('App\Models\Author');
    }

    public function genres()
    {
        return $this->belongsTo('App\Models\Genres');
    }
    
    public function publishingCompany()
    {
        return $this->belongsTo('App\Models\PublishingCompany');
    }
    


}
