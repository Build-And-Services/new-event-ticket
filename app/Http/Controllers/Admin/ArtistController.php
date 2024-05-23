<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArtistResource;
use App\Models\Artist;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function index()
    {
        $artist = Artist::all();
        return inertia('Artists/Index', [
            'getArtists' => ArtistResource::collection($artist)
        ]);
    }
}
