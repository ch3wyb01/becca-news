import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBBtn,
} from "mdb-react-ui-kit";

const NavBar = () => {
  const [topics, setTopics] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const { username, setUsername } = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  const handleLogOut = () => {
    setUsername(undefined);
    sessionStorage.setItem("username", undefined);
    navigate('/');
  };

  return (
    <header>
      <MDBNavbar className="app-navbar" expand="md" light bgColor="primary" fixed="top">
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
            <MDBNavbarNav className="justify-content-center">
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
                <hr />
              </MDBNavbarItem>
            </MDBNavbarNav>
            {!isExpanded ? (
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  <MDBIcon fas icon="user-alt" /> {username}
                </MDBDropdownToggle>
                <MDBDropdownMenu className="d-flex flex-column align-items-center">
                  <MDBDropdownItem className="mb-2">
                    <MDBDropdownLink href="/profile">Profile</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBBtn
                      className="my-2 p-2"
                      color="danger"
                      onClick={() => handleLogOut()}
                    >
                      Log out
                    </MDBBtn>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            ) : (
              <MDBNavbarNav>
                <MDBNavbarItem className="mb-2">
                  <MDBIcon fas icon="user-alt" /> {username}
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/profile">Profile</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBBtn
                    className="mt-1 mb-1 p-2"
                    color="danger"
                    onClick={() => handleLogOut()}
                  >
                    Log out
                  </MDBBtn>
                </MDBNavbarItem>
              </MDBNavbarNav>
            )}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
};

export default NavBar;
