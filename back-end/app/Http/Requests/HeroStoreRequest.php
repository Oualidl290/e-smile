<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HeroStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get custom validation messages.
     */
    public function rules(): array
    {
        if (request()->isMethod('post')) {
            return [
                'name' => 'required|string|max:258',
                'title' => 'required|string',
                'description' => 'required|string',
                'image_url' =>'required|string'
            ];
        } elseif (request()->isMethod('put')) {
            return [
                'name' => 'sometimes|required|string|max:258',
                'title' => 'sometimes|required|string',
                'description' => 'sometimes|required|description',
                'image_url' => 'sometimes|required|string'
            ];
        } elseif (request()->isMethod('delete')) {
            return [
                'id' => 'required|integer|exists:heroes,id',
            ];
        }

        return [];
    }

}
