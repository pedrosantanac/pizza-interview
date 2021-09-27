<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    public function catalogs()
    {
        return $this->belongsToMany(Catalog::class);
    }
}
