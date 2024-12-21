import { Link, useNavigate } from "react-router-dom";
import { getUserInfo } from "../services/api/user";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { CiShoppingBasket } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { clearAuth, updateAuth } from "../store/auth/authSlice";
import { errorLogOutSuccessAlert, logOutSuccessAlert, notSignedInError } from "../services/alerts/swal";
import { getProductsFromCart } from "../services/api/cart";
import { updateToken } from "../services/api/auth";

const Header = () => {
  const [firstName, setFirstName] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  const refresh_token = localStorage.getItem("refresh_token");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await getUserInfo();
        if (data) {
          setFirstName(data.first_name);
        } else if (refresh_token) {
          const result = await updateToken(refresh_token);
          dispatch(updateAuth({ access_token: result.access_token, refresh_token: result.refresh_token }));
          const retryData = await getUserInfo();
          setFirstName(retryData.data.first_name);
        }
      } catch (err) {
        // attempt to refresh the token, if it doesn't work then just log out
        console.log("Error Fetching User Info:", err.message);
        if (err.response?.status === 401 && refresh_token) {
          try {
            const result = await updateToken(refresh_token);
            dispatch(updateAuth({ access_token: result.access_token, refresh_token: result.refresh_token }));
            const retryData = await getUserInfo();
            setFirstName(retryData.data.first_name);
          } catch (refreshErr) {
            console.log("Token Refresh Failed:", refreshErr.message);
          }
        }

        if (isLoggedIn) {
          handleLogOut(true);
        }
      }
    };

    const fetchCartItems = async () => {
      try {
        const result = await getProductsFromCart();
        setCartItemCount(result.data.length);
      } catch (err) {
        console.log("Error Fetching Cart Items:", err.message);
      }
    };

    const fetchData = async () => {
      if (isLoggedIn) {
        try {
          await Promise.all([fetchUserInfo(), fetchCartItems()]);
        } catch (err) {
          console.log("Error Fetching Data:", err.message);
        }
      }
    };

    fetchData();
  });

  const handleSearchChange = (value) => setSearch(value);

  const handleSearchClick = () => {
    if (!isLoggedIn) {
      notSignedInError();

      return;
    }

    if (search === "") {
      return;
    }

    navigate(`../products?title=${search}`);
  };

  const handleLogOut = (updateError) => {
    dispatch(clearAuth());
    updateError ? errorLogOutSuccessAlert() : logOutSuccessAlert();
    navigate("/");
  };

  return (
    <header className="p-3 text-bg-primary">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="/">
              <img src="logo.png" alt="2ndHand logo" className="logo" />
            </Link>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                {isLoggedIn ? (
                  <Link to="/products" className="nav-link px-2 link-hov text-white">
                    Products
                  </Link>
                ) : (
                  <span
                    className="nav-link px-2 text-muted"
                    title="Sign in to access Products."
                    style={{ cursor: "help" }}
                  >
                    Products
                  </span>
                )}
              </li>
              <li>
                <Link to="about" className="nav-link px-2 link-hov text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <form className="col-12 col-lg-5 mb-3 mb-lg-0 mx-2 text-center" role="search">
            <div className="d-flex align-items-center">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              <FaSearch className="ms-2 text-white" style={{ transform: "scale(1.25)" }} onClick={handleSearchClick} />
            </div>
          </form>

          {isLoggedIn ? (
            <div className="d-flex gap-3">
              <Link
                to="cart"
                className="d-flex align-items-center gap-1 btn btn-light me-2 p-1 rounded text-decoration-none"
              >
                <CiShoppingBasket style={{ transform: "scale(1.25)", color: "black" }} />
                <p className="m-0 text-black">{cartItemCount}</p>
              </Link>
              <div className="d-flex gap-3">
                <div className="d-flex align-items-center gap-2">
                  <CgProfile className="profile-icon" />
                  <div className="text-end text-white">Welcome, {firstName}</div>
                </div>

                <div>
                  <Link to="profile" className="btn btn-light me-3">
                    Profile
                  </Link>
                  <button type="button" className="btn btn-danger" onClick={() => handleLogOut(false)}>
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-end">
              <Link to="signin" className="btn text-light me-2" style={{ backgroundColor: "#408EC6" }}>
                Sign In
              </Link>
              <Link to="register" className="btn btn-warning">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
