import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import NavBar from "./components/Main/NavBar";
import ArticlesList from "./components/ListView/ArticlesList";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import Login from "./components/Main/Login";
import ErrorMessage from "./components/Main/ErrorMessage";
import ProfilePage from "./components/Profile/ProfilePage";

function App() {
  const [username, setUsername] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUsername(sessionStorage.getItem("username"));
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

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
              <Route path="/profile" element={<ProfilePage />}></Route>
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
