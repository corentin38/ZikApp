import React, { PropTypes } from 'react'

const Tune = ({ artist, title }) => (
    <li>
        <p>Artist: {artist}; Title: {title}</p>
    </li>
)

Tune.propTypes = {
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Tune
