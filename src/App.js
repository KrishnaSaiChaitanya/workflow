import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
