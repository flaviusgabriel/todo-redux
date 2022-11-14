import "./registerPage.scss";

import { useState, useRef } from "react";
import { Field, formValues, reduxForm, submit } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import {
  isRequired,
  isEmail,
  isAol,
  passwordsMustMatch,
  isNumber,
  isMinValue18,
} from "../../../utils/validations";
import { Input } from "../../form/Input";
import { Link } from "react-router-dom";

import { register } from "../../../../context/actions/auth";

const RegisterPage = (props) => {
  const { handleSubmit, pristine, reset, submitting, error } = props;

  const [successful, setSuccessful] = useState(false);

  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleRegister = (formValues) => {
    const { age, email, name, password } = formValues;

    setSuccessful(false);

    dispatch(register(age, email, name, password))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };
  return (
    <div className="text-center centered">
      <div className="form-signin w-100 m-auto">
        <div className="container py-5">
          <h1 className="mb-3 fw-normal">Sign Up</h1>
          <form onSubmit={handleSubmit(handleRegister)}>
            {!successful && (
              <div>
                <Field
                  name="name"
                  type="text"
                  component={Input}
                  label="Name"
                  validate={isRequired}
                />
                <Field
                  name="email"
                  type="email"
                  component={Input}
                  label="Email"
                  validate={(isEmail, isRequired)}
                  warn={isAol}
                />
                <Field
                  name="age"
                  type="number"
                  component={Input}
                  label="Age"
                  validate={(isRequired, isMinValue18, isNumber)}
                />
                <Field
                  name="password"
                  type="password"
                  component={Input}
                  label="Password"
                  validate={isRequired}
                />

                <Field
                  name="passwordConfirmation"
                  type="password"
                  component={Input}
                  label="Confirm Password"
                  validate={(isRequired, passwordsMustMatch)}
                />

                {error && <strong>{error}</strong>}
                <div className=" gap-2  mx-auto btn-align">
                  <button
                    className="btn btn-primary btn-block w-50"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Sign Up</span>
                  </button>
                </div>
              </div>
            )}

            <div className="linkToSignIn">
              <span>
                Already have an account? <Link to="/login">Sign In</Link>{" "}
              </span>
            </div>

            {message && (
              <div className="form-group">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "SignUpValidation",
})(RegisterPage);
