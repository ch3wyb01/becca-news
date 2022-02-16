import {useNavigate} from "react-router-dom";

const ErrorMessage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div>
      <p>{message ? message : "Oops! We couldn't find that page"}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </button>
    </div>
  );
};

export default ErrorMessage;
