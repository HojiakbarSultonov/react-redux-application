import React, { useState } from "react";
import { Logo } from "../../constants";
import { Input } from "../../ui";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={Logo} alt="" width="100" height="70" />
          <h1 className="h3 mb-2 fw-normal">Please login</h1>

          <Input label={"Email address"} state={email} setState={setEmail} />
          <Input
            label={"Password"}
            type="password"
            state={password}
            setState={setPassword}
          />

          <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">
            Login
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </div>
  );
}

export default Login;
