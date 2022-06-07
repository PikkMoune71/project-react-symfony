import React from 'react'
import { createRoot } from 'react-dom/client';
import RoutesApp from './Routes';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
            <div>
              <Router>
                <RoutesApp />
              </Router>
            </div>
    )
  }
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);