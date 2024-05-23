<?php

namespace App\Models;

use App\Models\TicketBenefit;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TicketCategory extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function ticketBenefits()
    {
        return $this->hasMany(TicketBenefit::class, 'ticket_category_id');
    }
}
