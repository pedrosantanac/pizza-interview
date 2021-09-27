<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CatalogTest extends TestCase
{
    /**
     *
     * @test
     */

    public function it_should_response_http_ok()
    {
        $response = $this->get('/catalogs');

        $response->assertStatus(200);
    }

    /**
     *
     * @test
     */
    public function it_shuld_response_correct_json_structure()
    {
        $response = $this->get('/catalogs');

        $response->assertJsonStructure([
                "current_page",
                "data" => [
                    [
                        "id",
                        "name",
                        "created_at",
                        "updated_at",
                        "ingredients" => [
                            "*" => [
                                "id",
                                "name",
                                "price",
                                "created_at",
                                "updated_at",
                                "pivot" => [
                                    "catalog_id",
                                    "ingredient_id"
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        );
    }
}
