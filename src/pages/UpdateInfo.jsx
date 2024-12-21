import { useState, useEffect } from "react";
import { getUserInfo, updateInfo } from "../services/api/user";
import { fetchData, renderInput } from "../services/utils/utils";
import { Link, useNavigate } from "react-router-dom";

const UpdateInfo = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const updateForm = (data) => {
      setForm({
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        email: data.email,
        // password: "",
      });
    };

    fetchData(getUserInfo, updateForm, () => {});
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (form.phone_number.length !== 9) {
      setErrorMessage("Phone number must be exactly 9 digits.");

      return;
    }

    try {
      const result = await updateInfo(form);
      if (result.status === 200) {
        navigate("../profile");

        return;
      }
    } catch (err) {
      console.log(`Error Updating Info: ${err}`);
    }
  };

  return (
    <div className="col-lg-4 col-12 mx-auto m-5 text-center">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <h1 className="h3 mb-3 fw-normal">Please update your information</h1>

          {/* type, name, placeholder, label, value, onChange */}
          {renderInput("text", "first_name", "First Name", "First Name", form.first_name, handleChange)}
          {renderInput("text", "last_name", "Last Name", "Last Name", form.last_name, handleChange)}
          {renderInput("text", "phone_number", "Phone Number", "Phone Number", form.phone_number, handleChange)}
          {renderInput("email", "email", "Email", "Email", form.email, handleChange)}
          {/* {renderInput("password", "password", "Password", "Password", form.password, handleChange)} */}

          <span className="text-start text-danger">{errorMessage}</span>

          <button className="btn btn-primary py-2" type="submit">
            Update
          </button>
          <Link to="../profile">Back to Profile</Link>
        </form>
      </main>
    </div>
  );
};

export default UpdateInfo;
