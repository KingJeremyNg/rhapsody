const Tone = require('tone')

var synth = new Tone.Synth({
	"oscillator" : {
		"type" : "pwm",
		"modulationFrequency" : 0.2
	},
	"envelope" : {
		"attack" : 0.02,
		"decay" : 0.1,
		"sustain" : 0.2,
		"release" : 0.9,
	}
}).toMaster();

synth.triggerAttack("D3", "+1");

module.exports = {
    test: function() {
        var synth = new Tone.Synth().toMaster();
        synth.triggerAttackRelease("C4", "8n")
    }
}