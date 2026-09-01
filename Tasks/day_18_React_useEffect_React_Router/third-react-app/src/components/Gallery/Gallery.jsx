import { NavLink, Outlet } from "react-router-dom";

export default function Gallery() {
  return (
    <div className="container my-5 p-4 bg-light rounded-4 shadow-sm">
      <div className="text-center text-md-start border-bottom pb-3 mb-4">
        <h1 className="fw-bold text-dark">Tech Articles Gallery</h1>
        <p className="text-muted">
          Select a category from the sidebar to read the full article.
        </p>
      </div>

      <div className="row g-4">
        <aside className="col-md-4 col-lg-3">
          <div className="d-flex flex-column gap-3 p-3 bg-white rounded-3 shadow-sm h-100">
            <h5 className="fw-bold text-secondary mb-2">Categories</h5>

            <NavLink
              to="phone"
              className={({ isActive }) =>
                `btn text-start p-3 border-0 rounded-3 shadow-sm ${isActive ? "btn-success fw-bold" : "btn-light text-dark"}`
              }
            >
              Phones
            </NavLink>

            <NavLink
              to="watch"
              className={({ isActive }) =>
                `btn text-start p-3 border-0 rounded-3 shadow-sm ${isActive ? "btn-info text-white fw-bold" : "btn-light text-dark"}`
              }
            >
              Watches
            </NavLink>

            <NavLink
              to="laptop"
              className={({ isActive }) =>
                `btn text-start p-3 border-0 rounded-3 shadow-sm ${isActive ? "btn-primary fw-bold" : "btn-light text-dark"}`
              }
            >
              Laptops
            </NavLink>
          </div>
        </aside>

        <section className="col-md-8 col-lg-9">
          <div className="h-100">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
}
