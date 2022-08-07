<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'id' => 1,
                'name' => 'Animation Movies',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],

            [
                'id' => 2,
                'name' => 'Hindi Movies',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 3,
                'name' => 'South Indian Dubbed',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 4,
                'name' => 'South Indian Movies',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 5,
                'name' => 'Hindi TV Serials',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 6,
                'name' => 'English Movies',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 7,
                'name' => 'English & Foreign Hindi Dubbed Movies',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 8,
                'name' => 'Foreign Language Movies',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 9,
                'name' => 'English & Foreign TV Series',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 10,
                'name' => 'Islamic',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 11,
                'name' => 'Software',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 12,
                'name' => 'Tutorial',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 13,
                'name' => 'PC Games',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 14,
                'name' => 'Android Apps & Games',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
            [
                'id' => 15,
                'name' => 'WWE',
                'parent_id' => null,
                'type' => 'mainCategory',
                'createdBy' => 1,
            ],
        ]);
    }
}
