import FormButton from '../FormButton/FormButton';
import "./FormConfirmation.scss";

const FormConfirmation = (props) => {
  const { firstName, workshop, email } = props.formDetails;

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="formConfirmation">
      <p>
        Thank you <span className='formConfirmation__span'>{capitalizeFirstLetter(firstName)}</span> for booking
        your free <span className='formConfirmation__span'>{workshop}</span> lesson with us, We look forwards to
        seeing you and are thrilled in helping you achieve your goals.
      </p>
      <p>
        You should recieve an email from us confirming your booking at <span className='formConfirmation__span'>{email}</span>
      </p>
      <FormButton
        title={"Confirm"}
        status={props.status}
        onClick={props.onClick}
      />
    </div>
  );
};

export default FormConfirmation;
