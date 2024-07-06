import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './components/Auth/Login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
