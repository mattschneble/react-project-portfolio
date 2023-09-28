// import all required modules, packages, utilities and components
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/ContactMe.jsx';
import Resume from './pages/Resume.jsx';
import Error from './pages/Error.jsx';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// create and export the router
const router = createBrowserRouter([
  // define routes
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)