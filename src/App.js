
import React from 'react';
import NavBar from './components/navbar/NavBar';
import DropdownMenu from './components/dropdown/dropdown';
import Routes from './components/navbar/routes';
import { BrowserRouter as Router,} from 'react-router-dom'
import './App.css';

function App() {
  return (
   <Router>
    <div class = "app">
      <NavBar/>
      <DropdownMenu />
      <Routes/>
    </div>
   </Router>
  );
  }

export default App;
