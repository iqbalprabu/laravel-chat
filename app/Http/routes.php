-<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use App\Events\ChatEvent;


Route::get('/chat/{nama}/{to}', function ($nama, $to) {

    return view('chat', compact('to', 'nama'));
});

Route::post('/chat', function () {
    $req = Request::except('_token');
    
    event(new ChatEvent($req));

    return Response::json(200);
});

