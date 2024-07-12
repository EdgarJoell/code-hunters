import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/BroswePage';
import Featured from './pages/FeaturedPage';
import FourOhFour from './pages/FourOhFourPage';

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <FourOhFour /> },
  { path: "/browse", element: <Login />, errorElement: <FourOhFour/> },
  { path: "/featured", element: <Featured />, errorElement: <FourOhFour /> }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
