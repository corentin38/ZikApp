import React from 'react'
import { setVisibilityFilter } from '../actions'
import { connect } from 'react-redux'

let Field = ({ dispatch }) => {
    let keyword

    return (
        <div>
            <form onSubmit={e => {
                    e.preventDefault()
                    if (!keyword.value.trim()) {
                        return
                    }
                    dispatch(setVisibilityFilter(keyword.value))
                }}>
                <input ref={node => {
                        keyword = node
                    }} />
                <button type="submit">
                    Filter!
                </button>
            </form>
        </div>
    )
}

Field = connect()(Field)
export default Field
