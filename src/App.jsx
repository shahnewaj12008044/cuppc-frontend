import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="bg-container">
      <Header></Header>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
