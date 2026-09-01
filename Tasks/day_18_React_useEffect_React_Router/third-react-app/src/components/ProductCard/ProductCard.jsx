/* eslint-disable no-unused-vars */
// import React from "react";

export default function ProductCard({ itemData }) {
  const { id, prodName, price, desc, quantity, onSale } = itemData;

  return (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100 shadow-sm border-0 position-relative">
        {onSale && (
          <span className="badge bg-danger position-absolute top-0 end-0 m-2 px-3 py-2 rounded-pill">
            ON SALE
          </span>
        )}

        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary fw-bold mb-2">{prodName}</h5>
          <p className="card-text text-muted flex-grow-1">{desc}</p>

          <div className="mb-3">
            <span className="fs-5 fw-bold text-dark">${price}</span>
          </div>

          <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded mb-3">
            <span className="fw-semibold">Quantity:</span>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-sm btn-outline-secondary px-2 py-0">
                -
              </button>
              <span className="fw-bold px-2">{quantity}</span>
              <button className="btn btn-sm btn-outline-secondary px-2 py-0">
                +
              </button>
            </div>
          </div>

          <button className="btn btn-outline-danger w-100 mt-auto btn-sm">
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
}
