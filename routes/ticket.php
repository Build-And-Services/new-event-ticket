<?php

use App\Http\Controllers\Admin\TicketCategoryController;
use Illuminate\Support\Facades\Route;

Route::prefix('/ticket')->group(function () {
  Route::prefix('/category')->group(function () {
    Route::get('/', [TicketCategoryController::class, 'index'])->name('ticket.category.index');
    Route::post('/store', [TicketCategoryController::class, 'store'])->name('ticket.category.store');
  });
});
