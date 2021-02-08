import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import HomePage from './pages/HomePage'
import Header from './components/Header'
import {Box} from "@chakra-ui/react"

function App() {
  return (
    <Router>
      <Header />
      <Box margin='7% auto'/>
      <HomePage />
    </Router>
  );
}

export default App;
