import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;

    console.log(`The counter updated to: ${count}`);
  }, [count]);
  return (
    <>
      <div className="container text-center my-5 p-5 bg-light rounded shadow-sm">
        <h1 className="fw-bold text-primary">Home Page</h1>
        <p className="lead text-secondary">Welcome to our React Application!</p>
      </div>
      <div className=" text-center display-3 fw-bold text-primary mb-4">
        {count}
      </div>

      <div className="d-flex justify-content-center gap-2">
        <button
          className="btn btn-danger px-4"
          onClick={() => setCount(count - 1)}
        >
          Decrement (-)
        </button>

        <button className="btn btn-secondary px-4" onClick={() => setCount(0)}>
          Reset
        </button>

        <button
          className="btn btn-success px-4"
          onClick={() => setCount(count + 1)}
        >
          Increment (+)
        </button>
      </div>
    </>
  );
}
