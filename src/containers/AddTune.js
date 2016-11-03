import React from 'react'
import { connect } from 'react-redux'
import { addTune } from '../actions'

let AddTune = ({ dispatch }) => {
    let artist_input
    let title_input

    return (
        <div>
            <form onSubmit={e => {
                    e.preventDefault()
                    if (!artist_input.value.trim() || !title_input.value.trim()) {
                        return
                    }
                    dispatch(addTune(artist_input.value, title_input.value))
                    artist_input.value = ''
                    title_input.value = ''
                }}>
                <input ref={artist_node => {
                        artist_input = artist_node
                    }} />
                <input ref={title_node => {
                        title_input = title_node
                    }} />
                <button type="submit">
                    Add Tune
                </button>
            </form>
        </div>
    )
}
AddTune = connect()(AddTune)

export default AddTune
