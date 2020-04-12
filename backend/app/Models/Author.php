<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = [
        'name',
        'birthDate',
        'sex',
        'nacionalidade'
    ];

    public function books()
    {
        return $this->hasMany('App\Models\Books');
    }

}
