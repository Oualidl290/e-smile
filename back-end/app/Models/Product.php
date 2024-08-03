<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'image_url',
        'category_id'
    ];
    public $timestamps = false;
    use HasFactory;

public function categorie()
{
    return $this->belongsTo(Categorie::class);
}

public function orders()
{
    return $this->belongsToMany(Order::class, 'order_items')->withPivot('quantity', 'unit_price');
}
}
