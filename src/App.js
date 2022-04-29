import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Home/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
