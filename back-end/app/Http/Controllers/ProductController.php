<?php
namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\ProductStoreRequest;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function randomProduct(): JsonResponse
{
    $product = Product::inRandomOrder()->first();

    return response()->json([
        'product' => $product
    ], 200);
}
    public function getProductCount()
{
    $totalProducts = Product::count();
    return response()->json(['total' => $totalProducts]);
}

    public function index(): JsonResponse
    {
        $products = Product::all();
        return response()->json([
            'results' => $products
        ], 200);
    }

    public function store(ProductStoreRequest $request): JsonResponse
    {
        try {
            $product = Product::create([
                'name' => $request->name,
                'description' => $request->description,
                'image' => $request->image,
                'price' => $request->price,
                'category_id' => $request->category_id,
            ]);

            // Return a JSON response with the created product
            return response()->json([
                'message' => 'Product successfully created.',
                'product' => $product
            ], 201);
        } catch (\Exception $e) {
            // Handle exceptions and return a JSON response
            return response()->json([
                'message' => 'An error occurred while creating the product.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show(int $id): JsonResponse
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'message' => 'Product not found.',
                'error' => 'No product with the specified ID exists.'
            ], 404);
        }

        return response()->json([
            'product' => $product
        ], 200);
    }
    public function update(ProductStoreRequest $request, int $id): JsonResponse
    {
        try {
            // Find the product by ID
            $product = Product::find($id);

            if (!$product) {
                return response()->json([
                    'message' => 'Product not found.'
                ], 404);
            }

            // Update the product with validated request data
            $product->update($request->validated());

            // Return a JSON response with the updated product
            return response()->json([
                'message' => 'Product successfully updated.',
                'product' => $product
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while updating the product.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy(int $id): JsonResponse
    {
        // Find the product by ID
        $product = Product::find($id);

        // Check if the product exists
        if (!$product) {
            return response()->json([
                'message' => 'Product not found.'
            ], 404);
        }

        // Delete the product
        $product->delete();

        // Return a JSON response indicating successful deletion
        return response()->json([
            'message' => 'Product successfully deleted.'
        ], 200);
    }
}
