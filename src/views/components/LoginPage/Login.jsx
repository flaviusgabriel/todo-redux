import { useState, useRef } from "react";
import { Field, reduxForm, submit } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { login } from "../../../context/actions/auth";

import "./loginPage.scss";

const required = (value) => (value ? undefined : "Required");
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const tooOld = (value) =>
  value && value > 65 ? "You might be too old for this" : undefined;
const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group inputFieldandLabel">
    <label>{label}</label>
    <div className="d-flex justify-content-center">
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control w-50 "
      />
      {touched && error && <div className="label-required">{error}</div>}
    </div>
  </div>
);

// const renderField = ({
//   input,
//   label,
//   type,
//   meta: { touched, error, warning },
// }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched &&
//         ((error && <span>{error}</span>) ||
//           (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// );

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

  // const handleLogin = (formValues) => {
  //   const { email, password } = formValues;
  //   setLoading(true);
  //   console.log(formValues);

  //   dispatch(login({ email, password }))
  //     // .unwrap()
  //     .then(() => {
  //       navigate("/todo");
  //       //window.location.reload();
  //     })
  //     .catch(() => {
  //       setLoading(true);
  //       console.log("Eroare");
  //     });
  // };

  const handleLogin = () => {
    //e.preventDefault();

    setLoading(true);

    //form.current.validateAll();

    dispatch(login(email, password))
      .then(() => {
        navigate("/todo");
        //window.location.reload();
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
              component={renderField}
              label="Email"
              validate={(email, required)}
              warn={aol}
              onChange={onChangeEmail}
            />

            <Field
              name="password"
              type="password"
              component={renderField}
              label="Password"
              onChange={onChangePassword}
              validate={required}
            />
            {error && <strong>{error}</strong>}
            <div className=" gap-2  mx-auto btn-align">
              {/* <button
                type="submit"
                disabled={submitting}
                className="w-50 btn btn-lg btn-primary"
              >
                Submit
              </button> */}
              <button
                className="btn btn-primary btn-block w-50"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
                className="w-50 btn btn-lg btn-secondary"
              >
                Clear Values
              </button>
            </div>
            {message && (
              <div className="form-group">
                {/* <div
                  className="alert alert-danger alert-dismissible"
                  role="alert"
                >
                  {message}
                </div> */}
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
// export default Login;
