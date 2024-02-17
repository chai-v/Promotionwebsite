import React from 'react'
import ReactDOM from 'react-dom/client'
import Eventspage from './components/Eventspage/Eventspage.jsx'
import About from './components/about/About.jsx'
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import App from './App.jsx'
import './index.css'






ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/events' element={<Eventspage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
</BrowserRouter>
  
)
