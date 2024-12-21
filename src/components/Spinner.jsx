import PropTypes from "prop-types";

const Spinner = ({ size = "100px" }) => (
  <div className={`d-flex justify-content-center align-items-center w-100`}>
    <span
      className="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
      style={{ width: size, height: size }}
    ></span>
  </div>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

export default Spinner;
