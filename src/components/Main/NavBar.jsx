import { useState, useEffect, useContext } from "react";
import { getTopics } from "../../utils/api";
import { UserContext } from "../../contexts/UserContext";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBNavbarItem,
  MDBIcon,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

const NavBar = () => {
  const [topics, setTopics] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const { username } = useContext(UserContext);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <header>
      <MDBNavbar className="p-2" expand="md" light bgColor="white" fixed="top">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">NC News</MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={() => setIsExpanded(!isExpanded)}
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={isExpanded}>
            <MDBNavbarNav className="justify-content-end">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/">
                  all articles
                </MDBNavbarLink>
              </MDBNavbarItem>
              {topics.map((topic) => {
                return (
                  <MDBNavbarItem key={topic.slug}>
                    <MDBNavbarLink href={`/topics/${topic.slug}`}>
                      {topic.slug}
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                );
              })}
              <MDBNavbarItem>
                <MDBNavbarLink href="/profile">{username}</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
};

export default NavBar;
