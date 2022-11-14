export const Input = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group inputFieldandLabel">
    <label>{label}</label>
    <div className="d-flex justify-content-center input-label-required">
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
