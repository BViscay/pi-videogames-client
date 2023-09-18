import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";
import { Route, Routes, useLocation } from "react-router-dom";

import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import NavBar from "./views/NavBar/NavBar";
import DetailGame from "./views/Detail/DetailGame";
import NewGame from "./views/NewGame/NewGame";

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <div className="">
        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-game" element={<NewGame />} />
          <Route path="/videogames/:id" element={<DetailGame />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
