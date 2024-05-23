<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->integer("price");
            $table->integer("stock");
            $table->unsignedBigInteger('event_id')->nullable();
            $table->unsignedBigInteger('ticket_category_id')->nullable();
            $table->foreign('event_id')->references('id')->on('events')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreign('ticket_category_id')->references('id')->on('ticket_categories')->cascadeOnUpdate()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
