import { getInstrument } from 'instruments'
import { Loops } from './loops'
import { Midi } from './midi'
import { Tracks } from './tracks'
import { Transport } from './transport'

export const Controller = () => {
    const instruments = {}      // references to Tone.Synth, Tone.Sampler, etc
    const tracks = new Tracks() // references to Track = volume, pan, solo, meter, etc

    // window.__debug_instruments = instruments
    // window.__debug_tracks = tracks

    const instrumentAdd = (action) => {
        instruments[action.trackid] = getInstrument(action.instrument.id)
        tracks.add(action.trackid, instruments[action.trackid].instrument)
    }

    // track is added above in instrumentAdd
    const trackAdd = () => {}

    // unused
    const trackDel = (action) => {
        tracks.del(action.trackid)
    }

    return {
        instrumentAdd,
        trackAdd,
        trackDel,
        ...Midi(instruments),
        ...Transport(tracks), // not sure this is a good idea, used for track levels loop
        ...Loops(instruments).actions,
        ...tracks.actions,
    }
}
