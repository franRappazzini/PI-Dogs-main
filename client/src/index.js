import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import axios from "axios";
import { createRoot } from "react-dom/client";
import store from "./redux/store/store";

// TODO ver dotenv
// import dotenv from "dotenv";
// dotenv.config();

axios.defaults.baseURL =
  process.env.REACT_APP_SERVER || "http://localhost:3001";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
