import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getUser } from "../utils/api";

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
        <h1>Welcome back, {user.name}</h1>
      )}
    </div>
  );
};

export default ProfilePage;
