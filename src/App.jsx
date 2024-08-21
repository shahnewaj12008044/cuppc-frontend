import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";


function App() {
  return (
    <div className="bg-container">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
