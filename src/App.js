import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Template from './components/mainComponents/Template';
import Footer from './components/partials/Footer/Footer';
import Header from './components/partials/Header/Header';
import Routes from './Routes';

import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <Template >
        <Header />

        <Routes />

        <Footer />
      </Template>

    </BrowserRouter >
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispathToProps = (dispath) => {

}

export default connect(mapStateToProps, mapDispathToProps)(App);
