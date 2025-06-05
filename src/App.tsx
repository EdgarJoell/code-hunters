import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage';
import Browse from './pages/BroswePage';
import Featured from './pages/FeaturedPage';
import FourOhFour from './pages/FourOhFourPage';
import Layout from './Layout';
import NewPost from "./pages/NewPost.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/browse', element: <Browse /> },
      { path: '/featured', element: <Featured /> },
      { path: '/new-post', element: <NewPost /> },
    ],
    errorElement: <FourOhFour />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
