import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ProductsDetails from "./components/Products-Details/productsDetails";
import Layout from "./components/Layout-Sectiuon/Layout";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { store } from "./Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "Products-Details/:product_id",
        element: <ProductsDetails />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <h1>sign in page</h1>,
  },
  {
    path: "/sign-up",
    element: <h1>sign up page</h1>,
  },
]);
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
