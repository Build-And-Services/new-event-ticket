<?php

namespace App\Models;

use App\Models\Artist;
use App\Models\EventCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Event extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function artists()
    {
        return $this->hasMany(Artist::class);
    }

    public function eventcategories()
    {
        return $this->belongsTo(EventCategory::class, 'event_category_id');
    }


}
