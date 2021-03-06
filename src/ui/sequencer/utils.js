// TODO move below to general utils
const getNoteOffset = (time, barsize) =>
    time.bar*barsize + time.n4*(barsize/4) + time.n16*(barsize/16)

export const getLoopId = (sceneid, trackid) =>
    `${sceneid}:${trackid}`

export const getSceneId = (id) =>
    parseInt(id.split(':')[0], 10)

export const getTrackId = (id) =>
    parseInt(id.split(':')[1], 10)

export const parseTransportTime = (time) => {
    const [bar, n4, n16] = time.split(':')
    return {
        bar: parseInt(bar, 10),
        n4 : parseInt (n4, 10),
        n16: parseFloat(n16),
    }
}

export const getLoopsMaxBars = (sceneId, loops) => {
    const loopsBars = Object.keys(loops).map(loopId =>
        getSceneId(loopId) === sceneId
            ? loops[loopId].bars
            : 0)
    return Math.max(...loopsBars)
}

// UI stuff
import {
    NOTES,
    OCTAVES,
    NOTE_HEIGHT,
    OCTAVE_HEIGHT,
} from 'ui/sequencer/constants'

export const getNoteProps = ({ n, o, v, on, off }, barsize) => {
    const x = getNoteOffset(parseTransportTime(on),  barsize)
    const w = getNoteOffset(parseTransportTime(off), barsize) - x
    const y = NOTES.indexOf(n) * NOTE_HEIGHT + OCTAVES.indexOf(o) * OCTAVE_HEIGHT

    return { x, y, w, v }
}

export const getNoteVelocityProps = ({ v, on, off }, height, barsize) => {
    // TODO remove redundancy
    const x = getNoteOffset(parseTransportTime(on),  barsize)
    const w = getNoteOffset(parseTransportTime(off), barsize) - x
    const y = height - v * height

    return { x, y, w, v }
}
