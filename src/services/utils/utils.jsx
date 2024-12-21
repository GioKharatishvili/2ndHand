import axios from "axios";

export const renderInput = (type, name, placeholder, label, value, onChange, isRequired = true, min = 0, disabled = false) => (
  <div className="form-floating">
    <input
      type={type}
      className="form-control"
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={isRequired}
      min={min}
      disabled={disabled}
    />
    <label htmlFor={name}>{label}</label>
  </div>
);

const getAuthHeaders = () => {
  const token = localStorage.getItem("token")?.replace(/"/g, "");
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const handleRequest = async (method, url, data = null, successAlert = null, errorAlert = null) => {
  try {
    const response = await axios({
      method,
      url,
      headers: getAuthHeaders(),
      data,
    });

    if (successAlert) successAlert();

    if (url.includes("http://localhost:3000/auth")) {
      return response.data;
    }

    return response;
  } catch (err) {
    if (errorAlert) errorAlert();
    
    return err;
  }
};

export const fetchData = async (fetchFunction, setState, setLoading, fallbackValue = [], callback = null) => {
  setLoading(true);

  try {
    const result = await fetchFunction();
    const data = result?.data || fallbackValue;
    setState(data);

    if (callback) {
      callback(data);
    }
  } catch (err) {
    console.log("Error Fetching Data:", err);
    setState(fallbackValue);

    if (callback) {
      callback(fallbackValue);
    }
  } finally {
    setLoading(false);
  }
};
