import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <h1 class="gradient-text">Hi, I'm Mat</h1>
        <p>Portfolio</p>
      </div>
    </>
  );
}

export default App;