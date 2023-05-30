import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Spinner from "./atoms/loader/Spinner";
import Docs from "./pages/Docs";
import Login from "./pages/Login";
import Protected from "./layouts/Protected";
function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Protected component="Login">
          <Login />
        </Protected>
      ),
    },
    {
      path: "/",
      element: (
        <Protected component="Layout">
          <MainLayout />
        </Protected>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/docs",
          element: <Docs />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </>
  );
}

export default App;
