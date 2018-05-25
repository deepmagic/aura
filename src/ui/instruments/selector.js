import React from 'react'

const instruments = [
    {name: 'drum'},
    {name: 'am'},
    {name: 'fm'},
    {name: 'metal'},

    {name: 'dummy'},
    {name: 'dummy'},
    {name: 'dummy'},
    {name: 'dummy'},

    {name: 'dummy'},
    {name: 'dummy'},
    {name: 'dummy'},
    {name: 'dummy'},

    {name: 'dummy'},
    {name: 'dummy'},
    {name: 'dummy'},
    {name: 'dummy'},
]

const InstView = ({name, ...props}) =>
    <div className='instrument' {...props}>
        {name}
    </div>

export const InstrumentSelector = ({select, style}) =>
    <div className='instruments-selector dragscroll' style={style}>
        {
            instruments.map((inst, index) =>
                <InstView
                    key={index}
                    onClick={select.bind(null, inst)}
                    {...inst} />)
        }
    </div>