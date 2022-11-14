import { useState, useRef } from "react";
import { Field, reduxForm, submit } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { login } from "../../../context/actions/auth";

import "./loginPage.scss";

import { required, email, aol } from "../../utils/validations";
import { renderInput } from "../../Form/input";

const Login = (props) => {
  const { handleSubmit, pristine, reset, submitting, error } = props;

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = () => {
    setLoading(true);

    dispatch(login(email, password))
      .then(() => {
        navigate("/todo");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/todo" />;
  }

  return (
    <div className="text-center centered">
      <div className="form-signin w-100 m-auto">
        <div className="container py-5">
          <h1 className="mb-3 fw-normal">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Field
              name="email"
              type="email"
              component={renderInput}
              label="Email"
              validate={(email, required)}
              warn={aol}
              onChange={onChangeEmail}
            />

            <Field
              name="password"
              type="password"
              component={renderInput}
              label="Password"
              onChange={onChangePassword}
              validate={required}
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
                <span>Login</span>
              </button>
            </div>
            {message && (
              <div className="form-group">
                <div
                  className="alert alert-danger alert-dismissible fade show "
                  role="alert"
                >
                  {message}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
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
  form: "fieldLevelValidation", // a unique identifier for this form
})(Login);
