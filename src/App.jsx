/* import { useState } from 'react' */
import DcHeader from "./components/DcComicsHeader"
import DcComicsMainJumbotron from "./components/DcComicsMainJumbotron"
import DcComicsMainLinks from "./components/DcComicsMainLinks"
import DcFooter from "./components/DcComicsFooter"

import './App.css'

function App() {

  return (
    <>
      <DcHeader />
      <main>
        <DcComicsMainJumbotron />
        <DcComicsMainLinks />
      </main>
      <DcFooter />
    </>
  )
}

export default App