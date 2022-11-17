import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";

import { logout } from "../../../../context/actions/auth";

const ToDoPAge = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>TODO Page</h1>
    </div>
  );
};

export default ToDoPAge;
