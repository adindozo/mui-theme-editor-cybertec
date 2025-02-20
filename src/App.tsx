import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CustomizeThemePage from "./pages/CustomizeThemePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/customize" element={<CustomizeThemePage />} />
    </Routes>
  );
}

export default App;
