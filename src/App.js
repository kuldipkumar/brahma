import React from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="main-content d-flex">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
