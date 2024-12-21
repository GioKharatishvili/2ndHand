import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oops!</h1>
      <p>Something went wrong. The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default Error;
