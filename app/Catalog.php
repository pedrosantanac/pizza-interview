<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Catalog extends Model
{
    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class);
    }
}
