<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Assuming all users are authorized to make this request.
        // You can add more specific authorization logic as needed.
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        $method = $this->method(); // Get the request method

        // Define validation rules based on the request method
        if ($method === 'POST') {
            return [
                'name' => 'required|string|max:255',
                'description' => 'required|string',
                'image' => 'required|string',
                'price' => 'required|numeric',
                'category_id' => 'required|integer|exists:categories,id',
            ];
        } elseif ($method === 'PUT') {
            return [
                'name' => 'sometimes|required|string|max:255',
                'description' => 'sometimes|required|string',
                'image' => 'sometimes|required|string',
                'price' => 'sometimes|required|numeric',
                'category_id' => 'sometimes|required|integer|exists:categories,id',
            ];
        }

        return [];
    }
}
