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
        // Drop the table first if it exists
        Schema::dropIfExists('products');

        // Create the 'products' table
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // primary key
            $table->string('name');
            $table->string('description');
            $table->string('image');
            $table->double('price');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Drop the 'products' table
        Schema::dropIfExists('products');
    }
};
