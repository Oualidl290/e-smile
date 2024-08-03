<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class HeroCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->transform(function($hero) {
                return new HeroResource($hero);
            }),
            'links' => [
                'self' => url('/api/heroes'),
            ],
        ];
    }
}
