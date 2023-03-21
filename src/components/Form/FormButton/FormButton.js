import Spinner from '../../Spinner/Spinner';
import './FormButton.scss';

const FormButton = (props) => {
  return (
    <button className='formButton mt-3' onClick={props.onClick}>
      {props.status ? <span>Confirming<Spinner /></span> : <span>{props.title}</span>}
    </button>
  );
};

export default FormButton;