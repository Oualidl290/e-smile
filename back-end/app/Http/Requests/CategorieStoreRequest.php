<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategorieStoreRequest extends FormRequest
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
        // Get the request method
        $method = request()->getMethod();

        // Validation rules based on the request method
        if ($method === 'POST') {
            return [
                'name' => 'required|string|max:258',
            ];
        } elseif ($method === 'PUT') {
            return [
                'name' => 'sometimes|required|string|max:258',
            ];
        } elseif ($method === 'DELETE') {
            return [
                'id' => 'required|integer|exists:categories,id',
            ];
        }

        // Return an empty array for other request methods
        return [];
    }
}
