<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function ticketCategories()
    {
        return $this->belongsTo(TicketCategory::class, 'ticket_category_id');
    }

    public function events()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }
}
