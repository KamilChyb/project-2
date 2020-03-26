import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Login:
        <input type="text" />
      </label>
      <label htmlFor="">
        <br />
        Password:
        <input type="text" />
      </label>
      <br />
      <button>Log in</button>
    </div>
  );
};

export default LoginPage;
