<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\EventResource;
use App\Models\Event;
use App\Models\EventCategory;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        try {
            $events = Event::all();
            return inertia('Events/Index', [
                'events' => EventResource::collection($events)
            ]);
        } catch (\Throwable $th) {
            return redirect()->route('events.index')->with('error', $th->getMessage());
        }
    }

}
