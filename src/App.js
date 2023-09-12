import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = ()=> {
  const pageSize = 9;
  const apikey = process.env.REACT_APP_API
  const[progress, setProgress] = useState(0)
  
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route exact path="/" element={<News apikey={apikey} setProgress = {setProgress} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/business" element={<News apikey={apikey} setProgress = {setProgress} key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News apikey={apikey} setProgress = {setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News apikey={apikey} setProgress = {setProgress} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/health" element={<News apikey={apikey} setProgress = {setProgress} key="health" pageSize={pageSize} country="us" category="health"/>}></Route>
          <Route exact path="/science" element={<News apikey={apikey} setProgress = {setProgress} key="science" pageSize={pageSize} country="us" category="science"/>}></Route>
          <Route exact path="/sports" element={<News apikey={apikey} setProgress = {setProgress} key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News apikey={apikey} setProgress = {setProgress} key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App;
