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
        Schema::dropIfExists('orderitems');
        Schema::create('orderitems', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('orderID')->unsigned()->constrained();
            $table->bigInteger('productID')->unsigned()->constrained();
            $table->bigInteger('quantity');
            $table->bigInteger('unitprice');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orderitems');
    }
};
