import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./index.scss";

const LoginComponent: FC = () => {
  const history = useHistory();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (mail === "admin@admin" && password === "admin") {
      history.push("/");
    }
  };
  return (
    <div className="container login">
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            value={mail}
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setMail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
