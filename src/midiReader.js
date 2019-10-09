const path = require('path');
const fs = require('fs')

midiReader = function(file) {
    size = fs.statSync(file)["size"]
    fs.open(file, 'r', function(err, fd) {
        if (err) {
            console.log(err.message);
            return;
        }

        var buffer = Buffer.alloc(size);
        fs.read(fd, buffer, 0, size, 0, function(err, num) {
            console.log(buffer.toString('hex', 0, num));
        });

        let data = {
            data: null,
            pointer: 0,

            movePointer: function(_bytes) {
                this.pointer += _bytes;
                return this.pointer;
            }

            //Function to read bytes and increment pointer

            //Function to translate bytes into string text
        }

        //Start storing my buffer data into my file
        let midi = {}
    });
}

midiReader('C:/Users/jerem/Desktop/MIDI Files/SoulWorker_Main_Theme.mid')

module.exports = {
    midiReader: midiReader,
}