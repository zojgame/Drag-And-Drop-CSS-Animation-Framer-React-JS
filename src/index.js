import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDoDragAndDropComponent from './ToDo';
import AnimationComponent from './Animations';
import FramerAnimationComponent from './FramerAnimation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='css' element={<AnimationComponent />}></Route>
          <Route path='to-do' element={<ToDoDragAndDropComponent />}></Route>
          <Route path='framer-animation' element={<FramerAnimationComponent />}></Route>
        </Route>

      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
