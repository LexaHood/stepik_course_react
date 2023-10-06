import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

// import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App(props) {

  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
