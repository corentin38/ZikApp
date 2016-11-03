import React from 'react'
import Footer from './Footer'
import AddTune from '../containers/AddTune'
import VisibleTuneList from '../containers/VisibleTuneList'

const App = () => (
  <div>
    <AddTune />
    <VisibleTuneList />
    <Footer />
  </div>
)

export default App
