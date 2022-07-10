import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./shared/layouts";
import { HomeRoutes } from "./views/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/*" element={<HomeRoutes/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
