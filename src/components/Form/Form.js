import { useState, useRef } from 'react';
import Img from '../Img/Img';
import FormInput from './FormInput/FormInput';
import FormSelect from './FormSelect.js/FormSelect';
import img6 from '../../assets/img/img6.jpg';
import './Form.scss';

const Form = () => {
  // Init form input values
  const initFormData = {
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    address: {
      street: "",
      street2: "",
      city: "",
      postalCode: "",
    },
    dob: "",
    gender: "",
    workshop: "",
    workshopDate: "",
  };

  const [formData, setFormData] = useState(initFormData);
  const [error, setError] = useState({});
  const [formError, setFormError] = useState(false)
  const formRef = useRef();

  // Regular expression for validation
  const ukNumberRegex = /^(?:(?:00)?44|0)7(?:[45789]\d{2}|624)\d{6}$/;
  const ukPostCodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
  const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{1,}$/

  // Handlers
  const validateFormHandler = () => {
    const {firstName, lastName, contactNumber, address: {street, city, postalCode}} = formData;
    const inputErrors = {};

    if (!nameRegex.test(firstName)) {
      inputErrors.firstName = "Please fill in empty input";
    }

    if(!lastName.length >= 3) {
      inputErrors.lastName = "Please fill in empty input";
    }

    if (!ukNumberRegex.test(contactNumber)) {
      inputErrors.contactNumber = "Please enter a valid UK mobile contact number";
    }

    if (street.length <= 3) {
      inputErrors.street = "Please enter a valid street"
    }

    if (city.length <= 3) {
      inputErrors.city = "Please enter a valid city"
    }

    if (!ukPostCodeRegex.test(postalCode)) {
      inputErrors.postalCode = "Please enter a valid UK postcode";
    }

    return inputErrors;
  }

  const inputHandler = (e) => {
    if (e.target.name !== "address") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
      return;
    }

    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [e.target.id]: e.target.value,
      },
    });
  };

  const clearFormInputsHandler = () => {
    setFormData(initFormData);
    setError({});
    setFormError(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // Validate form inputs
    const inputErrors = validateFormHandler()

    // Check for input errors
    if (Object.keys(inputErrors).length > 0) {
      setError(inputErrors);
      setFormError(true);
      formRef.current.scrollIntoView();
    } else {
      // Handle confirmation
      console.log("Form submitted");
      setTimeout(() => {
        console.log(
          `Thank you ${formData.firstName} for booking with us, You should recieve an email from us confirming your booking. We look forwards to seeing you`
        );
        console.log(formData)
        clearFormInputsHandler();
      }, 1000);
    }   
  }

  return (
    <div className="form" onSubmit={formSubmitHandler} ref={formRef}>
      <div className="imageGradient">
        <Img class={"form__img"} imgSrc={img6} />
      </div>
      {/* Form */}
      <form className="form__content">
        {formError && (
          <div className="form__error">
            <p> * Please fill in all required fields before submitting the form. * </p>
          </div>
        )}
        {!formError && <h2>Please fill in the form below</h2>}

        {/* Form input fields */}
        <div className="input-container">
          <label>Student Name</label>
          <div className="input-name-wrapper">
            <FormInput
              type={"text"}
              placeholder={"First Name"}
              id={"firstName"}
              value={formData.firstName}
              onChange={(e) => inputHandler(e)}
              pattern={nameRegex.test(formData.firstName)}
              required
              errorMsg={error.firstName}
            />

            <FormInput
              type={"text"}
              placeholder={"Last Name"}
              id={"lastName"}
              value={formData.lastName}
              onChange={(e) => inputHandler(e)}
              pattern={nameRegex.test(formData.lastName)}
              required
              errorMsg={error.lastName}
            />
          </div>
        </div>

        <div className="input-container">
          <label>Contact</label>
          <FormInput
            type={"text"}
            placeholder="Number"
            id={"contactNumber"}
            value={formData.contactNumber}
            onChange={(e) => inputHandler(e)}
            pattern={ukNumberRegex.test(formData.contactNumber)}
            required
            errorMsg={error.contactNumber}
          />
        </div>

        <div className="input-container">
          <label>Email</label>
          <FormInput
            type={"email"}
            placeholder="Email"
            id={"email"}
            value={formData.email}
            onChange={(e) => inputHandler(e)}
            pattern={formData.email.includes('@')}
            required
            errorMsg={error.email}
          />
        </div>

        <div className="input-container">
          <label>Address</label>
          <FormInput
            type={"text"}
            placeholder={"Street"}
            id={"street"}
            name={"address"}
            value={formData.address.street}
            onChange={(e) => inputHandler(e)}
            pattern={formData.address.street.length > 3}
            required
            errorMsg={error.street}
          />

          <FormInput
            type={"text"}
            placeholder={"City"}
            id={"city"}
            name={"address"}
            value={formData.address.city}
            onChange={(e) => inputHandler(e)}
            pattern={formData.address.city.length > 3}
            required
            errorMsg={error.city}
          />

          <FormInput
            type={"text"}
            placeholder={"Postal Code"}
            id={"postalCode"}
            name={"address"}
            value={formData.address.postalCode}
            onChange={(e) => inputHandler(e)}
            pattern={ukPostCodeRegex.test(formData.address.postalCode)}
            required
            errorMsg={error.postalCode}
          />
        </div>

        <div className="input-container input-container--small">
          <label>Date Of Birth</label>
          <FormInput
            type={"date"}
            id={"dob"}
            name={"dob"}
            value={formData.dob}
            onChange={(e) => inputHandler(e)}
            pattern={formData.dob !== ""}
            required
            errorMsg={"Enter date of birth"}
          />
        </div>

        {/* Form Select fields */}
        <div className="input-container input-container--small">
          <label>Gender</label>
          <FormSelect
            name={"gender"}
            id={"gender"}
            value={formData.gender}
            onChange={(e) => inputHandler(e)}
            pattern={formData.gender !== ""}
            errorMsg={"Select Gender"}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </FormSelect>
        </div>

        <div className="input-container input-container--small">
          <label>Workshop</label>
          <FormSelect
            name={"workshop"}
            id={"workshop"}
            value={formData.workshop}
            onChange={(e) => inputHandler(e)}
            pattern={formData.workshop !== ""}
            errorMsg={"Select a Workshop"}
          >
            <option value="">Select Workshop</option>
            <option value="TKD Adults">TKD Adults - 7pm to 8pm (Wed & Fri)</option>
            <option value="TKD Kids">TKD Kids - 10am to 11am (Saturday)</option>
            <option value="TKD Private">TKD Private</option>
          </FormSelect>
        </div>

        <div className="input-container input-container--small">
          <label>Select date</label>
          <FormInput
            type={"date"}
            id={"workshopDate"}
            name={"workshopDate"}
            value={formData.workshopDate}
            onChange={(e) => inputHandler(e)}
            pattern={formData.workshopDate !== ""}
            required
            errorMsg={"Please choose a date"}
          />
        </div>
        <button className="mt-3">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Form;