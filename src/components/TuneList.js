import React, { PropTypes } from 'react'
import Tune from './Tune'

const TuneList = ({ tunes }) => (
    <ul>
        {tunes.map(tune =>
            <Tune
                key={tune.id}
                {...tune}
            />
         )}
    </ul>
)

TuneList.propTypes = {
    tunes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        artist: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default TuneList
