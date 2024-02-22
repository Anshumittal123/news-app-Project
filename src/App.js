import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }

  setProgress= (progress)=>{
    this.setState({progress: progress});
  }

  render() {
    return (
      <>
        <BrowserRouter>
        <Navbar/>
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}
          />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={9} country='in' category="general"/>}></Route>
          <Route exact path='/business' element={<News setProgress={this.setProgress} apikey={this.apikey}  key="business" pageSize={9} country='in' category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apikey={this.apikey}  key="entertainment" pageSize={9} country='in' category="entertainment"/>}></Route>
          <Route exact path='/health' element={<News setProgress={this.setProgress} apikey={this.apikey}  key="health" pageSize={9} country='in' category="health"/>}></Route>
          <Route exact path='/science' element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={9} country='in' category="science"/>}></Route>
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apikey={this.apikey}  key="sports"pageSize={9} country='in' category="sports"/>}></Route>
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apikey={this.apikey}  key="technology" pageSize={9} country='in' category="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}
