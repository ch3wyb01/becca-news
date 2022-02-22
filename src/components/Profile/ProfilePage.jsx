import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../utils/api";
import UserArticlesList from "./UserArticlesList";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const { username } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("authored");

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

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
          <MDBTabs fill className="mb-3">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleTabClick("authored")}
                active={activeTab === "authored"}
              >
                Authored Articles
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleTabClick("voted")}
                active={activeTab === "voted"}
              >
                Voted Articles
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={activeTab === "authored"}>
              <UserArticlesList username={username} isAuthor={true} />
            </MDBTabsPane>
            <MDBTabsPane show={activeTab === "voted"}>
              <UserArticlesList username={username} isAuthor={false} />
            </MDBTabsPane>
          </MDBTabsContent>
        </main>
      )}
    </div>
  );
};

export default ProfilePage;
