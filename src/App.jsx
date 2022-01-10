import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ArticlesList/>}></Route>
        <Route path='/articles' element={<ArticlesList/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
