export default function Counter({ count, i, setter }) {
  function increaseCount() {
    setter(count + i);
  }
  return (
    <>
      <p>
        count is: <span>{count}</span>
      </p>
      <button className="btn bg-info" onClick={increaseCount}>
        click me
      </button>
      <br />
    </>
  );
}
