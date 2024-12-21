import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UpdateInfo from "./pages/UpdateInfo";
import AdminPanel from "./pages/AdminPanel";
import LikedProducts from "./pages/LikedProducts";
import Purchases from "./pages/Purchases";
import About from "./pages/About";
import CreateProductForm from "./pages/CreateProductForm";
import CreateCategoryForm from "./pages/CreateCategoryForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<Cart />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="updateInfo" element={<UpdateInfo />} />
      <Route path="adminPanel" element={<AdminPanel />} />
      <Route path="likedProducts" element={<LikedProducts />} />
      <Route path="purchases" element={<Purchases />} />
      <Route path="about" element={<About />} />
      <Route path="createProduct" element={<CreateProductForm />} />
      <Route path="createCategory" element={<CreateCategoryForm />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
