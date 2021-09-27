<?php

use Illuminate\Database\Seeder;

class IngredientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->getIngredients() as $ingredient) {
            DB::table('ingredients')->insert($ingredient);
        }
    }

    public function getIngredients()
    {
        return [
            [
                "name" => "Tomato",
                "price" => 0.5
            ],
            [
                "name" => "Sliced Mushrooms",
                "price" => 0.5
            ],
            [
                "name" => "Feta Cheese",
                "price" => 1
            ],
            [
                "name" => "Sausages",
                "price" => 1
            ],
            [
                "name" => "Sliced Onion",
                "price" => 0.5
            ],
            [
                "name" => "Mozzarella Cheese",
                "price" => 0.5
            ],
            [
                "name" => "Oregano",
                "price" => 1
            ],
            [
                "name" => "Bacon",
                "price" => 1
            ]
        ];
    }
}
