import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="row" >
        <div className="col-2 sidebar" >
          <Sidebar></Sidebar>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="products" element={<Products></Products>}></Route>

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
