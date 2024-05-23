<?php

use App\Http\Controllers\Admin\ArtistController;
use Illuminate\Support\Facades\Route;


Route::resource('/artists', ArtistController::class);
