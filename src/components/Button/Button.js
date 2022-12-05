import { useNavigate } from 'react-router-dom';
import './Button.scss';

const Button = (props) => {
  const navigate = useNavigate();
  return (
    <button
      className={`button ${props.class || ""}`}
      onClick={() => navigate(props.redirectTo)}
    >
      {props.children}
    </button>
  );
};

export default Button;
