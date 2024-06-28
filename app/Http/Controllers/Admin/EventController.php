<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\EventCategoryResource;
use App\Http\Resources\EventResource;
use App\Models\Event;
use App\Models\EventCategory;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        try {
            $events = Event::with(['eventcategories', 'artists'])->get();
            return inertia('Events/Index', [
                'events' => $events
            ]);
        } catch (\Throwable $th) {
            return redirect()->route('events.index')->with('error', $th->getMessage());
        }
    }

    public function create()
    {
        try {
            $eventCategories = EventCategory::all();
            return inertia('Events/AddEvent', [
                'eventCategories' => $eventCategories
            ]);
        } catch (\Throwable $th) {
            return redirect()->route('events.index')->with('error', $th->getMessage());
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'event_category_id' => 'required|exists:event_categories,id',
            'date' => 'required',
            'start_time' => 'required|date_format:H:i',
            'finish_time' => 'required|date_format:H:i',
            'open_gate' => 'required|date_format:H:i',
            'venue' => 'required',
            'img' => 'required|mimes:png,jpg,jpeg,webp',
            'description' => 'required',
            'status' => 'required'
        ]);
        try {
            if ($request->hasFile('img')) {
                $file = $request->file('img');
                $fileName = $file->getClientOriginalName();
                $filePath = 'event-img/' . $fileName;
                $file->move('event-img', $fileName);
            }
            Event::create([
                'title' => $request->title,
                'event_category_id' => $request->event_category_id,
                'date' => $request->date,
                'start_time' => $request->start_time,
                'finish_time' => $request->finish_time,
                'open_gate' => $request->open_gate,
                'venue' => $request->venue,
                'img' => $filePath,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return redirect()->route('events.index')->with('success', 'Successfully create event !');
        } catch (\Throwable $th) {
            return redirect()->route('events.index')->with('error', $th->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $event = Event::findOrFail($id);
            $event->delete();
            return redirect()->route('events.index')->with('success', 'Successfully delete event !');
        } catch (\Throwable $th) {
            return redirect()->route('events.index')->with('error', $th->getMessage());
        }
    }
}
