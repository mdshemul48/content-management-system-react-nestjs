<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->enum('type',['movies', 'tvSeries', 'software', 'tutorials', 'games','others'])->default('others');
            $table->text('image')->nullable();
            $table->string('meta_data')->nullable();
            $table->integer('createdBy');
            $table->string("name")->nullable();
            $table->string("quality")->nullable();
            $table->string("watch_time")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
