import './App.css';
import Login from './pages/login';
import Registry from './pages/registry';
import Home from './pages/home';

import {
  RouterProvider, createBrowserRouter
} from 'react-router-dom'


const routes = createBrowserRouter([
  {
    path: '*',
    element: <Login />
  },
  {
    path: '/registry',
    element: <Registry />
  },
  {
    path: '/home',
    element: <Home />
  },
])
//use sweetalert
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
