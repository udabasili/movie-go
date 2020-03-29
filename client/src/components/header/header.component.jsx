import React from 'react';
import './header.styles.css';
import {ReactComponent as MovieLogo} from "../../assets/icons8-movie-projector-50.svg";


const header = () => (
    <nav className="navigation">
      <div className="logo">
        <div className="logo-icon">
          <MovieLogo/>
        </div>
        <div className="logo-text">
          MovieGo
        </div>
      </div>
    </nav>
);

export default header;
