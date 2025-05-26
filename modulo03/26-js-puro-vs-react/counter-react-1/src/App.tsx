import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador</h1>
      <p style={{ color: count < 0 ? 'red' : 'black' }}>{count}</p>
      <button onClick={() => setCount((c) => c - 10)}>-10</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c + 10)}>+10</button>
    </div>
  );
}

export default App;
