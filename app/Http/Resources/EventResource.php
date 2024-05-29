<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'event_category_id' => $this->event_category_id,
            'title' => $this->title,
            'date' => $this->date,
            'start_time' => $this->start_time,
            'finish_time' => $this->finish_time,
            'open_gate' => $this->open_gate,
            'venue' => $this->venue,
            'img' => $this->img,
            'desription' => $this->desription,
            'status' => $this->status,
        ];
    }
}
