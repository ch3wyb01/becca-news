import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [username, setUsername] = useState(undefined);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div className="App">
        {username ? (
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ArticlesList />}></Route>
              <Route path="/articles" element={<ArticlesList />}></Route>
              <Route path="/topics/:topic" element={<ArticlesList />}></Route>
              <Route
                path="/articles/:article_id"
                element={<SingleArticle />}
              ></Route>
            </Routes>
          </BrowserRouter>
        ) : 
        <Login />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
