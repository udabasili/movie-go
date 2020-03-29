import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieGo from './pages/movie-go/movie-go.component';
import Header from './components/header/header.component';
import {Route } from 'react-router-dom';
import MovieFilteredGo from './pages/movie-go-filtered/movie-go-filtered.component';
import MovieModalWindow from './components/movie-modal/movie-modal.component';




function App(props) {
  return (
      <React.Fragment>
        <Header/>
        <Route exact path="/" component={MovieGo}/>
        <Route exact path="/detail/:name" component={MovieModalWindow}/>
        <Route exact path={`/:genre`} component={MovieFilteredGo}/>
      </React.Fragment>
  );
}

export default App;
