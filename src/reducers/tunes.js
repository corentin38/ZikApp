const tune = (state, action) => {
    switch (action.type) {
        case 'ADD_TUNE':
            return {
                id: action.id,
                artist: action.artist,
                title: action.title
            }
        default:
            return state
    }
}

const tunes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TUNE':
            return [
                ...state,
                tune(undefined, action)
            ]
        default:
            return state
    }
}

export default tunes
