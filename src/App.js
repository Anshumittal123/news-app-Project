import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apikey="2e0b9a3f0f694d8a83510666bf9e48df";
  const [progress, setProgress] = useState(0);

    return (
      <>
        <BrowserRouter>
        <Navbar/>
          <LoadingBar
            color='#f11946'
            height={4}
            progress={progress}
          />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={9} country='in' category="general"/>}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey}  key="business" pageSize={9} country='in' category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey}  key="entertainment" pageSize={9} country='in' category="entertainment"/>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey}  key="health" pageSize={9} country='in' category="health"/>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={9} country='in' category="science"/>}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey}  key="sports"pageSize={9} country='in' category="sports"/>}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey}  key="technology" pageSize={9} country='in' category="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </>
    )
}

export default App