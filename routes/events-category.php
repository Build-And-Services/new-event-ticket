<?php

use App\Http\Controllers\Admin\EventCategoryController;
use Illuminate\Support\Facades\Route;


Route::resource('/eventcategories', EventCategoryController::class);
