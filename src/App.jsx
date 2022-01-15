import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import Login from "./components/Login";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [username, setUsername] = useState(undefined);

  useEffect(() => {
    setUsername(sessionStorage.getItem("username"));
  }, []);

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
              <Route path="*" element={<ErrorMessage />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <Login />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
