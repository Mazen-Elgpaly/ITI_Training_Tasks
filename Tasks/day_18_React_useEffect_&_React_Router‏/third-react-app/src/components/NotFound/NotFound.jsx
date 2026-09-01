import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="display-1 fw-bold text-danger mb-3">
            4<span className="text-warning">0</span>4
          </div>

          <h2 className="fw-bold text-dark mb-3">Page Not Found</h2>

          <p className="text-secondary lead mb-4">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm"
          >
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
