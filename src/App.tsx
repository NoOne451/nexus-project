// import { Link } from 'react-router-dom';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import AuthLayout from './Layout/Auth/AuthLayout';
import SignUp from './Layout/Auth/components/SignUp';
import SignIn from './Layout/Auth/components/SignIn';

export type slidesItemType = {
  imageUrl: string;
  content: string;
};
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={'/signup'} />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/signin',
          element: <SignIn />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
  // return (

  // );
}

export default App;
