import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ErrorBoundary from './components/ErrorBoundery';
import MainLayout from './components/layout/MainLayout'
import ButtonView from './components/Views/buttonView'
import CardView from './components/Views/cardView'
import CheckboxView from './components/Views/checkboxView'
import InputView from './components/Views/inputView';
import SliderView from './components/Views/sliderViews';
import TextView from './components/Views/textfieldView';
import SwitchView from './components/Views/switchView';
import RadioView from './components/Views/radioView';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ButtonView />} /> 
            <Route path="buttons" element={<ButtonView />} />
            <Route path="cards" element={<CardView />} />
            <Route path="Checkbox" element={<CheckboxView />} />
            <Route path="input" element={<InputView/>} />
            <Route path="Slider" element={<SliderView/>} />
            <Route path="Textfield" element={<TextView/>} />
            <Route path="SwitchButton" element={<SwitchView/>} />
            <Route path="RadioButton" element={<RadioView/>} />

            {/* ✅ Add more routes like inputs, toggles, etc. */}
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
