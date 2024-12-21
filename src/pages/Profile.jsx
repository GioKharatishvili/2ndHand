import { useEffect, useState } from "react";
import { getUserInfo } from "../services/api/user";
import { fetchData } from "../services/utils/utils";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(getUserInfo, setUserInfo, setLoading);
  }, []);

  return (
    <div className="container">
      <div className="px-4 py-4 mt-5 text-center border border-2 border-black rounded">
        <h1 className="display-5 fw-bold text-body-emphasis">Profile</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="col-lg-6 mx-auto">
            <ul className="list-unstyled fs-5  p-3">
              <li>First Name: {userInfo.first_name}</li>
              <li>Last Name: {userInfo.last_name}</li>
              <li>Email: {userInfo.email}</li>
              <li>Password: ********</li>
              <li>Phone Number: {userInfo.phone_number}</li>
            </ul>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="../updateInfo" className="btn btn-primary btn-lg gap-3">
                Update Info
              </Link>
              <Link to="../adminPanel" className="btn btn-outline-secondary btn-lg">
                Admin Panel
              </Link>
              <Link to="../likedProducts" className="btn btn-warning btn-lg">
                Liked Products
              </Link>
              <Link to="../purchases" className="btn btn-light btn-lg">
                Purchase History
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
