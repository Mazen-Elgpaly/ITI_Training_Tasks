import { useState } from "react";
import Article from "../Article/Article";
import Counter from "../counter/Counter";
export default function Home() {
  let [count, setCount] = useState(0);

  return (
    <>
      <h2>Reach 10 to see the Fathy</h2>
      <Counter count={count} i={1} setter={setCount} />
      <Article checker={count >= 10 ? true : false} />
    </>
  );
}
