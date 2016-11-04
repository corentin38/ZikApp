import { connect } from 'react-redux'
import TuneList from '../components/TuneList'

const getVisibleTunes = (tunes, filter) => {
    if (filter === 'clear') {
        return tunes
    }
    return tunes.filter(t => t.artist.contains(filter))
}

const mapStateToProps = (state) => ({
    tunes: getVisibleTunes(state.tunes, state.visibilityFilter)
})

const VisibleTuneList = connect(
    mapStateToProps
)(TuneList)

export default VisibleTuneList
