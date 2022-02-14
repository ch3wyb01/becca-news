import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getUsers } from "../utils/api";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

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
        setIsInvalid(true);
        setIsLoading(false);
      }
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
          <h1>NC News</h1>
          <MDBCard className="shadow my-4 mx-auto px-2" >
            <MDBCardBody>
              <MDBCardTitle>Login</MDBCardTitle>
              <form onSubmit={(event) => checkUser(event)} className="d-flex justify-content-center">
                <MDBInput label="Username" type="text" />
              <MDBBtn type="submit">Log in</MDBBtn>
              </form>
            </MDBCardBody>
          {isInvalid && <p>Invalid username</p>}
          </MDBCard>
        </div>
      )}
    </main>
  );
};

export default Login;
