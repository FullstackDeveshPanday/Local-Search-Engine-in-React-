import React , { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import items from './components/Form';
import Table from './components/Table';


function App() {
  const [data] =useState(items)
  return (
    <div className="container-fluid">
      <Navbar/>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <Table data={data} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
