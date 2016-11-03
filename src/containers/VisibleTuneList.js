import { connect } from 'react-redux'
import TuneList from '../components/TuneList'

const getVisibleTunes = (tunes, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return tunes
        case 'SHOW_FEUCHATTERTON':
            return tunes.filter(t => t.artist === "Feu! Chartterton")
        case 'SHOW_REST':
            return tunes.filter(t => t.artist !== "Feu! Chartterton")
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => ({
    tunes: getVisibleTunes(state.tunes, state.visibilityFilter)
})

const VisibleTuneList = connect(
    mapStateToProps
)(TuneList)

export default VisibleTuneList
