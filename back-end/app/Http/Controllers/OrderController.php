<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function calculateTotalProfit()
    {
        // Retrieve all orders
        $orders = Order::all();

        $totalProfit = 0;

        // Iterate over each order
        foreach ($orders as $order) {
            // Retrieve all order items for the current order
            $orderItems = $order->orderItems;

            // Iterate over each order item
            foreach ($orderItems as $orderItem) {
                // Calculate profit for the order item
                $profit = $orderItem->unitPrice - $orderItem->costPrice;
                // Add the profit to the total profit
                $totalProfit += $profit;
            }
        }

        return response()->json(['totalProfit' => $totalProfit]);
    }
    public function index()
    {
        $orders = Order::all();
        return response()->json([
            'results' => $orders
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
