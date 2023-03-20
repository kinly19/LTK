import { useEffect, useState } from 'react';
import './FormInput.scss';

const FormInput = (props) => {
  const [inputTouched, setInputTouched] = useState(false);
  const inputValid = props.pattern // Boolean
  const inputError = !props.pattern && inputTouched;
  const blurHandler = () => setInputTouched(true);

  // The purpose of the useEffect hook in this code is to reset the inputTouched state when 
  // the form is submitted, so that any error styles applied to the input field can be removed.
  useEffect(() => {
    const inputSubmitHandler = () => {
      if (inputValid && !inputError) {
        setInputTouched(false);
      }
    };

    window.addEventListener("submit", inputSubmitHandler);

    return () => {
      window.removeEventListener("submit", inputSubmitHandler);
    };
  }, [inputValid]);

  return (
    <div className='inputField'>
      <input
        className={
          inputError ? "inputField--error" : inputValid ? "inputField--valid" : "inputField"
        }
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={blurHandler}
        required={props.required}
      />
      {!inputValid && inputError && <p>{props.errorMsg}</p>}
    </div>
  );
};

export default FormInput;