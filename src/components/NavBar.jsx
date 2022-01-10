import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <nav>
      <Link to="/">All articles</Link>
      {topics.map((topic) => {
        return (
          <Link to={`topics/${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
