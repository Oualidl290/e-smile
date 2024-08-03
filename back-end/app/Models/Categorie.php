<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    protected $fillable = [
        'name'
    ];
    public $timestamps = false;
    use HasFactory;

    public function products()
{
    return $this->hasMany(Product::class);
}
}
