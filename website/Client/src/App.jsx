import {Hero,Events,Page3, Navbar} from "./components"
import "./components/App.css"

const App = () => {
  return (
    <div className="page">
      <Navbar/>
      <Hero/>
      <Events/>
      <Page3/>
    </div>
  )
}

export default App