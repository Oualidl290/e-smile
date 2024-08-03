<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Http\Requests\CategorieStoreRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
  
    public function index(): JsonResponse
    {
        $categories = Categorie::all();
        return response()->json([
            'results' => $categories
        ], 200);
    }


    public function store(CategorieStoreRequest $request): JsonResponse
    {
        try {
            // Create category
            $category = Categorie::create([
                'name' => $request->name,
            ]);

            // Return JSON response with the created category
            return response()->json([
                'message' => 'Category successfully created.',
                'category' => $category
            ], 201);
        } catch (\Exception $e) {
            // Handle exceptions and return JSON response
            return response()->json([
                'message' => 'An error occurred while creating the category.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show(int $id): JsonResponse
    {
        $category = Categorie::find($id);
        if (!$category) {
            return response()->json([
                'message' => 'Category not found.'
            ], 404);
        }

        return response()->json([
            'category' => $category
        ], 200);
    }

    /**
     * Update the specified category in storage.
     *
     * @param \App\Http\Requests\CategorieStoreRequest $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CategorieStoreRequest $request, int $id): JsonResponse
    {
        try {
            // Find the category by ID
            $category = Categorie::find($id);

            if (!$category) {
                return response()->json([
                    'message' => 'Category not found.'
                ], 404);
            }

            // Update the category with validated request data
            $category->update($request->validated());

            // Return a JSON response with the updated category
            return response()->json([
                'message' => 'Category successfully updated.',
                'category' => $category
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while updating the category.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified category from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        // Find the category by ID
        $category = Categorie::find($id);

        // Check if the category exists
        if (!$category) {
            return response()->json([
                'message' => 'Category not found.'
            ], 404);
        }

        // Delete the category
        $category->delete();

        // Return a JSON response indicating successful deletion
        return response()->json([
            'message' => 'Category successfully deleted.'
        ], 200);
    }
}

