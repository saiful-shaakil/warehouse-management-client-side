import { Route, Routes } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import LandingPage from "./Components/Home/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
