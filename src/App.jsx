import React, { useState } from 'react'
import './App.css'
import CustomNavbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = ()=> {
  const [progress, setProgress] = useState(0)
  // setProgress(progress)
 const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API

  return (
    <div>
      
    <Router>
    <LoadingBar
    height={3}
    color='#f11946'
    progress={progress}
        
      />
     <CustomNavbar/>
     <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"}  country={"in"} category={"general"}/>}/>  
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"}  country={"in"} category={"business"}/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"}  country={"in"} category={"entertainment"}/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={"health"}  country={"in"} category={"health"}/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={"science"}  country={"in"} category={"science"}/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"}  country={"in"} category={"sports"}/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"}  country={"in"} category={"technology"}/>}/>
      </Routes>
     </Router>
    </div>
  )
}


export default App
