import { useState } from "react"
import {Hero,Events,Page3, Navbar} from "./components"
import "./components/App.css"
import Modal from "./components/modal/modal"

const App = () => {
  const [showModal, setshowModal] = useState(true)
  return (
    <div className="page">
      {showModal && <Modal onClose={()=>setshowModal(false)}/>}
      <Navbar/>
      <Hero/>
      <Events/>
      <Page3/>
    </div>
  )
}

export default App