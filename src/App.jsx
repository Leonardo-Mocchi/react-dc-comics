/* import { useState } from 'react' */
import DcHeader from "./components/DcComicsHeader"
import DcComicsMainJumbotron from "./components/DcComicsMainJumbotron"
import DcComicsMainLinks from "./components/DcComicsMainLinks"
import DcFooter from "./components/DcComicsFooter"

import comics from "./data/comics";
import footerLinks from "./data/footer_links";

import './App.css'

function App() {

  return (
    <>
      <DcHeader />
      <main>
        <DcComicsMainJumbotron comics={comics} />
        <DcComicsMainLinks />
      </main>
      <DcFooter links={footerLinks} />
    </>
  )
}

export default App