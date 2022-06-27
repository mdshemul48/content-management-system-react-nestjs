<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'type', 'image','category_id','createdBy','meta_data', 'subCategory_id',
    ];

    public function post_details()
    {
        return $this->hasOne(Post_details::class,'post_id', 'id');
    }
}
