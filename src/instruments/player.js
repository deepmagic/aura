import Tone from 'tone'

export const Player = () => {

    const samples = {
        'C9':  'samples/linndrum1/Kick LinnDrum 1.wav',
        'C#9': 'samples/linndrum1/Snare LinnDrum 1.wav',
        'D9':  'samples/linndrum1/ClosedHH LinnDrum 1.wav',
        'D#9': 'samples/linndrum1/OpenHH LinnDrum 1.wav',
        'E9':  'samples/linndrum1/Ride LinnDrum.wav',
        'F9':  'samples/linndrum1/Clap LinnDrum 1.wav',
        'F#9': 'samples/linndrum1/Crash LinnDrum.wav',
        'G9':  'samples/linndrum1/HiTom LinnDrum 1.wav',
        'G#9': 'samples/linndrum1/LowTom LinnDrum 1.wav',
        'A9':  'samples/linndrum1/HiConga LinnDrum 1.wav',
        'A#9': 'samples/linndrum1/LowConga LinnDrum 1.wav',
        'B9':  'samples/linndrum1/SideStick LinnDrum 1.wav',
    }
    /*
    const samples = {
        'C9': 'samples/808/808-Kicks34.wav',
        'C#9': 'samples/808/808-HiHats01.wav',
        'D9': 'samples/808/808-Snare10.wav',
    }
    */
    const instrument = new Tone.Players(samples)

    const keyMap = Object.keys(samples)
    const keys = () => {
        return keyMap
    }

    const play = (time, note) => {
        const duration = Tone.TimeBase(note.off) - Tone.TimeBase(note.on)
        instrument.get(note.n + (note.o - 1)).start(time, 0, duration, note.v)
    }

    return {
        instrument,
        keys,
        play,
    }
}
