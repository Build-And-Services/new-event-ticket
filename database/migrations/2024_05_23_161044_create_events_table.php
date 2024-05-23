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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('event_category_id')->nullable();
            $table->string("title");
            $table->date("date");
            $table->time("start_time");
            $table->time("finish_time");
            $table->time("open_gate");
            $table->string("venue");
            $table->string("img");
            $table->longText("description");
            $table->enum('status', ['ACTIVE', 'COMING SOON', 'ENDED']);
            $table->foreign('event_category_id')->references('id')->on('event_categories')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
