import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../services/api/auth";
import { setAuth } from "../store/auth/authSlice";
import { renderInput } from "../services/utils/utils";

const Register = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const displayError = (property) => {
    switch (property) {
      case "email":
        return "Invalid Email.";
      case "password":
        if (form.password.length < 8) {
          return "Password must be at least 8 characters long.";
        }
        return "Password must be at most 24 characters long.";
      case "phone_number":
        return "Phone number must be exactly 9 digits.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const result = await register(form);
      const error = result.response.data.message;

      if (error.length > 0) {
        setErrorMessage(displayError(error[0].property));

        return;
      }

      dispatch(setAuth(result.access_token));
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="col-lg-4 col-12 mx-auto m-5 text-center">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          {/* type, name, placeholder, label, value, onChange */}
          {renderInput("text", "first_name", "First Name", "First Name", form.first_name, handleChange)}
          {renderInput("text", "last_name", "Last Name", "Last Name", form.last_name, handleChange)}
          {renderInput("text", "email", "name@example.com", "Email address", form.email, handleChange)}
          {renderInput("password", "password", "Password", "Password", form.password, handleChange)}
          {renderInput("text", "phone_number", "Phone Number", "Phone Number", form.phone_number, handleChange)}

          <span className="text-start text-danger">{errorMessage}</span>

          <div>
            <span className="me-1">Already have an account?</span>
            <Link to="../signin">Sign In</Link>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            Register
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
