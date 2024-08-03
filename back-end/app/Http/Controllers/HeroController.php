<?php
namespace App\Http\Controllers;

use App\Models\Hero;
use App\Http\Requests\HeroStoreRequest;

class HeroController extends Controller
{
    public function index()
    {
        $heroes = Hero::all();
        return response()->json([
            'results' => $heroes
        ], 200);
    }

    public function store(HeroStoreRequest $request)
    {
        try {
            // Create hero
            Hero::create([
                'name' => $request->name,
                'title' => $request->title,
                'description' => $request->description,
                'image_url' =>$request->image_url
            ]);
            // Return JSON response
            return response()->json([
                'message' => 'Hero successfully created.'
            ], 201);
        } catch (\Exception $e) {
            // Handle exceptions and return JSON response
            return response()->json([
                'message' => 'An error occurred while creating the hero.'
            ], 500);
        }
    }

    public function show($id)
    {
        $hero = Hero::find($id);
        if (!$hero) {
            return response()->json([
                'message' => 'Hero not found.'
            ], 404);
        }
        return response()->json([
            'hero' => $hero
        ], 200);
    }
    public function update(HeroStoreRequest $request, $id)
{
    try {
        // Fetch the hero by ID
        $hero = Hero::find($id);

        if (!$hero) {
            return response()->json([
                'message' => 'Hero not found.'
            ], 404);
        }

        // Update the hero with validated request data
        $hero->update($request->validated());

        // Return a JSON response with the updated hero
        return response()->json([
            'message' => 'Hero successfully updated.',
            'hero' => $hero
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'An error occurred while updating the hero.',
            'error' => $e->getMessage()
        ], 500);
    }
}

public function destroy($id)
{
    // Find the hero by ID
    $hero = Hero::find($id);

    // Check if the hero exists
    if (!$hero) {
        return response()->json([
            'message' => 'Hero not found.'
        ], 404);
    }

    // Delete the hero
    $hero->delete();

    // Return a JSON response indicating successful deletion
    return response()->json([
        'message' => 'Hero successfully deleted.'
    ], 200);
}


}
