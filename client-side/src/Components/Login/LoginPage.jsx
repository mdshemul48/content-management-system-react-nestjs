import React, { useState } from "react";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const onChangeHandler = event => {
    setForm(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  return (
    <main className="form-signin w-100">
      <form className="bg-white p-3 w-25 rounded text-center m-auto">
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
