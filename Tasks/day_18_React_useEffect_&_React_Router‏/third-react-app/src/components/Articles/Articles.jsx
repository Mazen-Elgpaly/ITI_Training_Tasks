function PhonesArticle() {
  return (
    <>
      <article className="card border-0 shadow-sm p-4 text-start bg-white rounded-3">
        <div className="d-flex align-items-center mb-3">
          <div>
            <h3 className="h4 m-0 fw-bold text-success">
              Evolution of Smartphones
            </h3>
            <small className="text-muted">Published: 2026</small>
          </div>
        </div>
        <p className="card-text text-secondary lh-lg">
          Smartphones have become an essential part of daily life. By combining
          powerful processors with professional-grade cameras, modern mobile
          devices allow you to run business operations and capture high-quality
          content on the go.
        </p>
      </article>
    </>
  );
}

function LaptopsArticle() {
  return (
    <>
      <article className="card border-0 shadow-sm p-4 text-start bg-white rounded-3">
        <div className="d-flex align-items-center mb-3">
          <div>
            <h3 className="h4 m-0 fw-bold text-primary">
              Laptops & High Productivity
            </h3>
            <small className="text-muted">Published: 2026</small>
          </div>
        </div>
        <p className="card-text text-secondary lh-lg">
          Laptops provide the computing power required by developers and content
          creators. With advanced battery efficiency and high-performance chips,
          you can manage heavy workloads seamlessly from anywhere.
        </p>
      </article>
    </>
  );
}

function WatchesArticle() {
  return (
    <>
      <article className="card border-0 shadow-sm p-4 text-start bg-white rounded-3">
        <div className="d-flex align-items-center mb-3">
          <div>
            <h3 className="h4 m-0 fw-bold text-info">
              Smartwatches & Health Tracking
            </h3>
            <small className="text-muted">Published: 2026</small>
          </div>
        </div>
        <p className="card-text text-secondary lh-lg">
          Smartwatches are no longer just for telling time; they serve as
          comprehensive health assistants. They monitor heart rates, oxygen
          levels, and sleep patterns while providing real-time notifications and
          fitness tracking.
        </p>
      </article>
    </>
  );
}

export { PhonesArticle, LaptopsArticle, WatchesArticle };
