let nextTuneId = 0
export const addTune = (artist, title) => ({
  type: 'ADD_TUNE',
  id: nextTuneId++,
  artist,
  title
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
