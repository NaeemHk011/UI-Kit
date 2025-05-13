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
import RadioViews from './components/Views/radioViews';
import { AlertView } from './components/Views/alertView';
import { ProgressView } from './components/Views/progressView';
import AvatarView from './components/Views/avatarView';
import TooltipView from './components/Views/tooltipView';
import TypographyView from './components/Views/typographyView';
import FloatView from './components/Views/floatbuttonView';

import LoaderView from './components/Views/loaderView';
import BadgeView from './components/Views/badgeView';
import ResultView from './components/Views/resultView';
import TableView from './components/Views/tableView';











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
            <Route path="RadioButton" element={<RadioViews/>} />
            <Route path="Badge" element={<BadgeView/>} />
            <Route path="Alert" element={<AlertView/>} />
            <Route path="Progress" element={<ProgressView/>} />
            <Route path="Avatar" element={<AvatarView/>} />
            <Route path="Table" element={<TableView/>} />
            <Route path="Tooltip" element={<TooltipView/>} />
            <Route path="Typography" element={<TypographyView/>} />
            <Route path="Floatbutton" element={<FloatView/>} />
            <Route path="Result" element={<ResultView/>} />
            <Route path="Loader" element={<LoaderView/>} />



            {/* more routes  */}
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
