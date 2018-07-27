import React from 'react'
import { getNoteVelocityProps } from 'ui/sequencer/utils'
import { BarLine } from 'ui/sequencer/pattern-bars'
import { NoteVelocityBar } from 'ui/sequencer/pattern-notes'

export class PatternModulation extends React.PureComponent {
    render() {
        const {
            bars,
            notes,
            barsize,
            width,
            height,
            timesig,
            beats
         } = this.props

        return (
            <svg
                className='modulation'
                width={width}
                height={height}
                shapeRendering='crispEdges'>
                {
                    [...Array(bars*bars*4).keys()].map(bar =>
                        <BarLine key={bar}
                            bar={bar}
                            bars={bars}
                            barsize={barsize}
                            timesig={timesig}
                            beats={beats} />)
                }
                {
                    notes.map((note, index) =>
                        <NoteVelocityBar
                            key={index}
                            height={height}
                            {...getNoteVelocityProps(note, height, barsize)} />)
                }
            </svg>
        )
    }
}
