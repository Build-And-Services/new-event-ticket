<?php

namespace App\Models;

use App\Models\Event;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventCategory extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function events()
    {
        return $this->hasMany(Event::class);
    }
}
