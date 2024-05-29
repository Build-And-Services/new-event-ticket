<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\EventCategoryResource;
use App\Models\EventCategory;
use Illuminate\Http\Request;

class EventCategoryController extends Controller
{
    public function index()
    {
        $eventCategories = EventCategory::all();
        return inertia('EventCategories/Index', [
            'eventCategories' => $eventCategories
        ]);
    }

    public function store(Request $request)
    {

        try {
            $request->validate([
                'name' => 'required'
            ]);
            EventCategory::create([
                'name' => $request->name
            ]);
            return redirect()->route('eventcategories.index')->with('success', 'Successfully create event category !');
        } catch (\Throwable $th) {
            return redirect()->route('eventcategories.index')->with('error', $th->getMessage());
        }
    }

    public function update(Request $request, $id)
    {

        try {
            $request->validate([
                'nama' => 'required',
            ]);
            $eventCategory = EventCategory::findOrFail($id);
            $eventCategory->update($request->all());
            return redirect()->route('eventcategories.index')->with('success', 'Successfully update event category !');
        } catch (\Throwable $th) {
            return redirect()->route('eventcategories.index')->with('error', $th->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $eventCategory = EventCategory::findOrFail($id);
            $eventCategory->delete();
            return redirect()->route('eventcategories.index')->with('success', 'Successfully delete event category !');
        } catch (\Throwable $th) {
            return redirect()->route('eventcategories.index')->with('error', $th->getMessage());
        }
    }
}
