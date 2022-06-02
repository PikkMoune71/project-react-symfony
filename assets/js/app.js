import React, { Component, useState } from 'react'
import { createRoot } from 'react-dom/client';
import Home from './views/Home';

function App() {
    return (
            <div>
              <Home />
            </div>
    )
  }
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);