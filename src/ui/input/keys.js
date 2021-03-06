import React from 'react'

class Keys extends React.Component {
    constructor() {
        super()
        this.bindings = {
            'tab': this.toggleSongPattern,
            ' ': this.toggleTemp,
        }
    }
    toggleSongPattern = () => {
        if (this.props.loopActive) {
            this.props.uiToggleSongPattern()
        }
    }
    toggleTemp = () => {
        console.log('todo')
    }

    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = (event) => {
        let key = event.key.toLowerCase()

        if (event.shiftKey)
            key = 'shift-' + key
        if (event.metaKey)
            key = 'meta-' + key
        if (event.ctrlKey)
            key = 'ctrl-' + key
        if (event.altKey)
            key = 'alt-' + key

        if (this.bindings[key]) {
            this.bindings[key](event)
            event.preventDefault()
            return false
        } else {
            // console.log('key pressed', `'${key}'`)
        }
    }
    render = () => null
}

import { connect } from 'react-redux'
import { uiToggleSongPattern } from 'actions/ui'

export const AuraKeys = connect(
    (state) => ({
        loopActive: state.loopActive
    }),
    {
        uiToggleSongPattern
    }
)(Keys)
