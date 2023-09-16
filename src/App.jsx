import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";
import { Route, Routes } from "react-router-dom";

import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
