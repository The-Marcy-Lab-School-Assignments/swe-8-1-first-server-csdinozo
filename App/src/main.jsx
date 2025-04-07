import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Joke from './components/Joke';
import Picture from './components/Picture';
import Dice from './components/Dice';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/joke" element={<Joke />} />
            <Route path="/picture" element={<Picture />} />
            <Route path="/dice-roller/:quantity" element={<Dice />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
