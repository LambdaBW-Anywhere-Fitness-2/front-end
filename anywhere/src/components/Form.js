import React, {
    useState,
    useEffect
} from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
    // managing state for our form inputs
    const [formState, setFormState] = useState({
        Name:"",
        phoneNumber: "",
        gender: "",
        dateOfBirth: "",
        email: "",
        address: "",
        addressContinue: "",
        city: "",
        state: "",
        zip: "",
        terms: true

    });

    // // server error
    // const [serverError, setServerError] useState("");

    // // control whether or not the form can be submitted if there are errors in form validation (in the useEffect)
    // const [buttonDisabled, setButtonDisabled] = useState(true);

    // // managing state for errors. empty unless inline validation (validateInput) updates key/value pair to have error

    // const [errors, setErrors] useState({
    //     Name:"",
    //     phoneNumber: "",
    //     gender: "",
    //     dateOfBirth: "",
    //     email: "",
    //     address: "",
    //     addressContinue: "",
    //     city: "",
    //     state: "",
    //     zip: "",
    //     terms: true

    // });

    // temporary state used to display response from API. this is not a commonly used convention
    const [post, setPost] = useState([]);

    // inline validation, validating one key/value pair at a time
    const validateChange = e => {
        // get the rules out of schema with reach at key "e.target.name" --> "formSchema[e.target.name]"

        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.name === "terms" ? e.target.checked : e.target.value) //
            .then((valid) => {
                // if valid param is true, then erase any errors in error state at that key/value in errors
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            })
            .catch((err) => {
                console.log(err);

                // if failing validation, set error in state
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });

    };

    // onSubmit function
    const formSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted!')

        // send out POST request with obj as second param, for us that is formState.
        // trigger .catch by changing URL to "https://reqres.in/api/register" -> see step 7 in notion notes
        axios
            .post("https://reqres.in/api.users", formState)
            .then((res) => {
                console.log("success!", res.data);
                // update temp state with value from API to display in <pre>
                setPost(res.data);

                // if successful request, clear any server errors
                setServerError(null);

                setFormState({
                    Name:"",
                    phoneNumber: "",
                    gender: "",
                    dateOfBirth: "",
                    email: "",
                    address: "",
                    addressContinue: "",
                    city: "",
                    state: "",
                    zip: "",
                    terms: true
                });
            })
            .catch((err) => {
                // this is where we could create a server error in the form! if API request fails, say for authentication (that user doesn't exist in our DB),
                // set serverEr
                setServerError("oops! something happened!");
            });
    };

      // onChange function
      const inputChange = (e) => {
            // use persist with async code -> we pass the event into validateChange that has async promise logic with .validate
        e.persist();
        console.log("input changed!", e.target.value);
        const newFormData = {
            ...formState,
            [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
};

        validateChange(e);
        setFormState(newFormData);
};

  // schema used for all validation to determine whether the input is valid or not
  const formSchema = yup.object(),shape({
    name: yup
    .string()
    .required("Name is a required field");
    phoneNumber: yup
    .string()
    .required("Must be numerical only");
    gender: yup
    .string()
    .oneOf(
        ["Male", "Female"],
    dateOfBirth: yup
    .string()
    .required("Must be numericalk only");
    email: yup
    .string()
    .email("Must be a valid email")
    .required("Must be a valid email"),
    address: yup
    .string()
    .required("Must include a valid address")
    city: yup
    .string()
    .city("Must include a valid city")
    .required("Must include a valid city"),
    state: yup
    .string()
    .state("Must include a valid state")
    .required("Must include a valid state")
    zip: yup
    .string()
    .zip("Must include a valid zip code")
    .required("Must include a valid zip code")
    terms: yup
    .boolean()
    .oneOf([true], "Please agree to T&Cs")
  });

  useEffect(() => {
      formSchema
      .invalid(formState)
      .then((isValid) => {
        // isValid is a boolean
      // !true === false
      // !false === true
      // if the form is valid, and we take the opposite --> we do not want disabled btn
      // if the form is invalid (false) and we take the opposite (!) --> we will disable the btn
        setButtonDisabled(!isValid);
        });
  }, [formState]);

  return (
      <form onSubmit={formSubmit}>
        {serverError ? <p className="error">{serverError</p> : null }

    <label htmlFor="name">
        First Name
        <input
            id="fist nane"
            type="text"
            name="first name"
            value={formState.name}
            onChange={inputChange}
        />
        {errors.name.length > / > <p className="error">{errors.name}</p> : null}
    </label>
    <label htmlFor="phoneNumber">
        Phone Number
        <input
          id="phoneNumber"
          type="number"
          name="phonNumber"
          value={formState.phoneNumber}
          onChange={inputChange}
        />
        {errors.phoneNumber.length > 0 ? (
          <p className="error">{errors.phoneNumber}</p>
        ) : null}
      </label>
      <label htmlFor="positions">
        Gender
        <select
          id="positions"
          name="positions"
          onChange={inputChange}
          value={formState.positions}
        >
          <option>--Please chose your gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.positions.length > 0 ? (
          <p className="error">{errors.positions}</p>
        ) : null}
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          value={formState.email}
          onChange={inputChange}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>
      <label htmlFor="address">
        Address
        <input
          id="address"
          type="text"
          name="address"
          value={formState.adress}
          onChange={inputChange}
        />
        {errors.address.length > 0 ? (
          <p className="error">{errors.address}</p>
        ) : null}
      </label>
      <label htmlFor="addressContinue">
        Address Continue
        <input
          id="addressContinue"
          type="text"
          name="addressContinue"
          value={formState.addressContinue}
          onChange={inputChange}
        />
        {errors.addressContinue.length > 0 ? (
          <p className="error">{errors.addressContinue}</p>
        ) : null}
      </label>
      <label htmlFor="city">
        City
        <input
          id="city"
          type="text"
          name="city"
          value={formState.city}
          onChange={inputChange}
        />
        {errors.city.length > 0 ? (
          <p className="error">{errors.city}</p>
        ) : null}
      </label>
      <label htmlFor="state">
        this.state.
        <input
          id="state"
          type="text"
          name="state"
          value={formState.state}
          onChange={inputChange}
        />
        {errors.state.length > 0 ? (
          <p className="error">{errors.state}</p>
        ) : null}
      </label>
      <label htmlFor="zip">
        Zip
        <input
          id="zip"
          type="text"
          name="zip"
          value={formState.zip}
          onChange={inputChange}
        />
        {errors.zip.length > 0 ? (
          <p className="error">{errors.zip}</p>
        ) : null}
      </label>
      <label htmlFor="terms" className="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms & Cs
        {errors.terms.length > 0 ? (
          <p className="error">{errors.terms}</p>
        ) : null}
      </label>
      <button disabled={buttonDisabled} type="submit">
        Submit
      </button>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>
  );
}