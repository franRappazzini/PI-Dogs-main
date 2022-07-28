import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreateDog from "./components/organisms/CreateDog/CreateDog";
import DogDetails from "./components/organisms/DogDetails/DogDetails";
import Home from "./components/organisms/Home/Home";
import Main from "./components/organisms/Main/Main";
import Page404 from "./components/organisms/Error/Page404";

// TODO borrar comentarios

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/home" element={<Home />} />

        <Route path="/dog/:breed" element={<DogDetails />} />

        <Route path="/createDog" element={<CreateDog />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
