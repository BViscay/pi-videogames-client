import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
