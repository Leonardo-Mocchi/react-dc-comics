/* import { useState } from 'react' */
import DcHeader from "./components/DcComicsHeader"
import './App.css'
import DcJumbotron from "./components/DcComicsJumbotron"
import DcBottomlinks from "./components/DcComicsLinks"
import DcFooter from "./components/DcFooter"

function App() {

  return (
    <>
      <DcHeader />
      <DcJumbotron />
      <DcBottomlinks />
      <DcFooter />
    </>
  )
}

export default App