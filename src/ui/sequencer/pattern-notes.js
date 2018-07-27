import React from 'react'
import { NOTE_HEIGHT } from 'ui/sequencer/constants'

const NOTEOFFSET = 2
const BOXHEIGHT = NOTE_HEIGHT - 3

export const NoteVelocityBar = ({ x, y, height }) =>
    <React.Fragment>
        <line className='note-vel-line' x1={x} y1={y} x2={x} y2={height} />
        <circle className='note-vel-circle' cx={x} cy={y} r={4} shapeRendering='auto' />
    </React.Fragment>

export const NoteBox = ({x, y, w, v}) =>
    <React.Fragment>
        <rect className='midi-note'   x={x} y={y+NOTEOFFSET} width={w} height={BOXHEIGHT} />
        <rect className='midi-note-v' x={x} y={y+NOTEOFFSET} width={w} height={BOXHEIGHT*(1-v)} />
    </React.Fragment>

export const Note = ({note, octave}) =>
    <div className={`note${note.length === 2 ? ' sharp' : ''}`}>
        {`${note}${octave}`}
    </div>
