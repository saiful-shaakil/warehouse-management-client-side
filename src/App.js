import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Home/LandingPage/LandingPage";
import Header from "./Components/Header/Header";

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
