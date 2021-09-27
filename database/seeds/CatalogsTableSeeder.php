<?php

use Illuminate\Database\Seeder;

class CatalogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $catalogs =
            [
                [
                    'name' => 'Fun Pizza',
                ],
                [
                    'name' => 'Super Mushroom Pizza',
                ]
            ];

        foreach ($catalogs as $catalog) {
            DB::table('catalogs')->insert($catalog);
        }
    }
}
