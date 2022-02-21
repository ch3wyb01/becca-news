import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../utils/api";
import UserArticlesList from "./UserArticlesList";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const { username } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getUser(username).then((userFromApi) => {
      setUser(userFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <main>
          <h1 id="profile-greeting">Welcome back, {user.name}</h1>
          <UserArticlesList username={username} isAuthor={true}/>
          <UserArticlesList username={username} isAuthor={false}/>
        </main>
      )}
    </div>
  );
};

export default ProfilePage;
