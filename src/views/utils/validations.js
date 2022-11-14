export const isRequired = (value) => (value ? undefined : "Required");

export const isEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const isAol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

export const passwordsMustMatch = (value, allValues) =>
  value !== allValues.password ? "Passwords do not match" : undefined;

export const isNumber = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const isMinValue18 = minValue(18);
