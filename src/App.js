
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
            </Routes>
        </BrowserRouter>


          // <Home />

  );
}

export default App;
