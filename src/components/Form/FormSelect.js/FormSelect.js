import { useState, useEffect } from 'react';
import './FormSelect.scss';

const FormSelect = (props) => {
  const [inputTouched, setInputTouched] = useState(false);
  const inputValid = props.pattern; // Boolean
  const inputError = !props.pattern && inputTouched;
  const blurHandler = () => setInputTouched(true);

  // This side effect allows us to reset 'inputError' state when the input field is considered valid
  // When the form is submitted we can remove 'inputField--error' class style
  useEffect(() => {
    setInputTouched(false)
  }, [inputValid])

  return (
    <div className="selectField">
      <select
        className={
          inputError ? "selectField--error" : inputValid ? "selectField--valid" : "selectField"
        }
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={blurHandler}
        required
      >
        {props.children}
      </select>
      {/* Error msg */}
      {!inputValid && inputError && <p>{props.errorMsg}</p>}
    </div>
  );
};

export default FormSelect;