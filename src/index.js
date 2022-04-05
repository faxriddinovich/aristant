import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './Components/Request/Store/Store'
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const container=document.getElementById('root')
const root=createRoot(container)
root.render(
<Provider store={store}>
  <App />
</Provider>)
reportWebVitals();
