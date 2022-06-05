import React from 'react'
import { createRoot } from 'react-dom/client';
import RoutesApp from './Routes';

function App() {
    return (
            <div>
              <RoutesApp />
            </div>
    )
  }
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);