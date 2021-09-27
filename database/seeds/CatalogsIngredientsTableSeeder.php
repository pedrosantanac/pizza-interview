<?php

use Illuminate\Database\Seeder;

class CatalogsIngredientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $funPizza = \App\Catalog::where('name', 'Fun Pizza')->first();

        $ingredientFunPizza = \App\Ingredient::whereIn('name',
            [
                'Tomato',
                'Sliced Mushrooms',
                'Feta Cheese',
                'Sausages',
                'Sliced Onion',
                'Mozzarella Cheese',
                'Oregano',
                'Bacon'
            ]
        )->get()->pluck('id');
        $funPizza->ingredients()->sync($ingredientFunPizza);

        $superMushroomsPizza = \App\Catalog::where('name', 'Super Mushroom Pizza')->first();
        $ingredientMushroomsPizza= \App\Ingredient::whereIn('name',
            [
                'Tomato',
                'Sliced Mushrooms',
                'Sliced Onion',
                'Mozzarella Cheese',
                'Oregano',
                'Bacon'
            ]
        )->get();
        $superMushroomsPizza->ingredients()->sync($ingredientMushroomsPizza);
    }
}
