import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

import { loginMethod } from "../../Store/asyncMethods/authMethods";

function LoginPage() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const onChangeHandler = (event) => {
    setForm((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(
      loginMethod(form, (errorMessage) => {
        if (errorMessage) {
          toast.error(errorMessage.error);
        } else {
          const from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        }
      })
    );
  };

  return (
    <main className="form-signin w-100 mb-5">
      <form className="bg-white p-3 w-25 rounded text-center m-auto" onSubmit={onSubmitHandler}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" name="email" onChange={onChangeHandler} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            name="password"
            onChange={onChangeHandler}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </main>
  );
}

export default LoginPage;
