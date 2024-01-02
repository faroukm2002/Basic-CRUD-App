import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="row" >
        <div className="col-2 sidebar" >
          <Sidebar></Sidebar>
        </div>
        <div className="col-10">Home Page</div>
      </div>
    </div>
  );
}

export default App;
