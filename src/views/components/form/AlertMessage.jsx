const AlertMessage = (props) => {
  const { message, type } = props;
  return (
    <>
      <div>
        <div className={`alert alert-${type}`} role="alert">
          {message}
        </div>
      </div>
    </>
  );
};

export default AlertMessage;
