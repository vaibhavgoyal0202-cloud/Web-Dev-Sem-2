const { useState } = React;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="outer-box">
      <div className="container">
        <h1>Counter</h1>

        <h2>{count}</h2>

        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);