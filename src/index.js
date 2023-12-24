import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import {RouterProvider} from "react-router-dom";
import router from "./router";
import {Provider} from 'react-redux'
import store from './store'

//进行样式的全局初始化
import 'normalize.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 严格模式下会自动重复执行一次？
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

