<?php

namespace App\Listeners\ChatEvent;

use App\Events\ChatEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendChatLog
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ChatEvent  $event
     * @return void
     */
    public function handle(ChatEvent $event)
    {
        \Log::info('Send Chat');
    }
}
