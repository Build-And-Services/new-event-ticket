<?php

namespace App\Models;

use App\Models\TicketCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TicketBenefit extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function ticketCategories()
    {
        return $this->belongsTo(TicketCategory::class, 'ticket_category_id');
    }

}

