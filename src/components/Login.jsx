import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getUsers } from "../utils/api";

const Login = () => {
  const { username, setUsername } = useContext(UserContext);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkUser = (event) => {
    setIsInvalid(false);
    event.preventDefault();
    setIsLoading(true);
    getUsers().then((usersFromApi) => {
      const usernames = usersFromApi.map((user) => user.username);
      const inputtedUser = event.target[0].value;
      if (usernames.includes(inputtedUser)) {
        setUsername(inputtedUser);
        sessionStorage.setItem("username", inputtedUser);
      } else {
        setIsInvalid(true)
        setIsLoading(false);
      };
    });
  };

  return (
    <main>
      {isLoading ? (
        <div>
          <div className="spinner-border text-secondary" role="status"></div>
          <p>Loading</p>
        </div>
      ) : (
        <div>
          <p>Login</p>
          <form onSubmit={(event) => checkUser(event)}>
            <input type="text" name="username" />
            <button type="submit">Login</button>
          </form>
          {isInvalid && <p>Invalid username</p>}
        </div>
      )}
    </main>
  );
};

export default Login;
