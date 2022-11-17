import { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { login } from "../../../../context/actions/auth";

import "./loginPage.scss";

import { isRequired, isEmail, isAol } from "../../../utils/validations";
import { Input } from "../../form/Input";
import { Link } from "react-router-dom";

import { clearMessage } from "../../../../context/actions/message";

//import { type as typeValue } from "../../form/alert.types";

const LoginPage = (props) => {
  const { handleSubmit, error } = props;

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message, type } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = (formValues) => {
    const { email, password } = formValues;
    setLoading(true);

    dispatch(login(email, password))
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);

        setTimeout(() => {
          dispatch(clearMessage());
        }, 3000);
      });
  };

  const loginNav = () => {
    navigate("/");
  };

  return (
    <div className="text-center centered">
      <div className="form-signin w-100 m-auto">
        <div className="container py-5">
          <h1 className="mb-3 fw-normal">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Field
              name="email"
              type="email"
              component={Input}
              label="Email"
              validate={(isEmail, isRequired)}
              warn={isAol}
            />

            <Field
              name="password"
              type="password"
              component={Input}
              label="Password"
              validate={isRequired}
            />
            {error && <strong>{error}</strong>}
            <div className=" gap-2  mx-auto btn-align">
              <button
                className="btn btn-primary btn-block w-50"
                disabled={loading}
                onClick={loginNav}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            <div className="linkToSignUp">
              <span>
                Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "fieldLevelValidation", // a unique identifier for this form
})(LoginPage);
