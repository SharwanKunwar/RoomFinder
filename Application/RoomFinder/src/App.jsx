import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SeekerDashboard from "./pages/SeekerDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/seeker" element={<SeekerDashboard />} />
        <Route path="/owner" element={<OwnerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
