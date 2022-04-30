import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Home/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/User/Login/Login";
import Register from "./Components/User/Register/Register";
import NotFound from "./Components/OtherPages/NotFound/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Profile from "./Components/User/Profile/Profile";
import Blogs from "./Components/Blogs/Blogs";
import Laptops from "./Components/Home/Laptops/Laptops";
import RequireAuth from "./Components/User/RequireAuth/RequireAuth";
import ManageItem from "./Components/OtherPages/ManageItem/ManageItem";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/laptop" element={<Laptops></Laptops>}></Route>
        <Route
          path="/laptop/:id"
          element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
