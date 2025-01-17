import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { topHeader } from "./constant";
import ScrollToTop from "./components/ScrollToTop";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ScrollToTop />
      <ToastContainer />
      <div className="bg-white shadow-lg">
        <Header topHeader={topHeader} />
      </div>
      <Outlet />
      
      <div className="bg-[#F5F5F7] mt-14 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;