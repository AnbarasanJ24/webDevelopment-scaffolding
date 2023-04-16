/* Event Emitter is responsible for emit a event and listen for the same event
=========================== */

const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {
    custom() {
        console.log("Event Emitted")
    }
}

const customEmitter = new CustomEmitter();

customEmitter.on('custom', (data) => {
    console.log(data)
})

customEmitter.emit('custom', "Hello World!")