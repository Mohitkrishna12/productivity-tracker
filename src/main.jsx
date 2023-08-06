import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from "./store";
import { Provider } from "react-redux";
console.log("main")
ReactDOM.createRoot(document.getElementById("root")).render( 
    <Provider store={store}>
      <App />
    </Provider>
    ,
);
