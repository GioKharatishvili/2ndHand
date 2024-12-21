import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../services/api/auth";
import { setAuth } from "../store/auth/authSlice";
import { renderInput } from "../services/utils/utils";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn(form);
      dispatch(
        setAuth({
          access_token: result.access_token,
          refresh_token: result.refresh_token,
        })
      );
    } catch (err) {
      console.log(`Error Signing In: ${err}`);
    }
  };

  return (
    <div className="col-lg-4 col-12 mx-auto m-5 text-center">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          {/* type, name, placeholder, label, value, onChange */}
          {renderInput("text", "email", "name@example.com", "Email address", form.email, handleChange)}
          {renderInput("password", "password", "Password", "Password", form.password, handleChange)}

          <div>
            <span className="me-1">Don&apos;t have an account?</span>
            <Link to="../register">Register</Link>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
