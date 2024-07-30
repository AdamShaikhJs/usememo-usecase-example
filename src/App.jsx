import React, { useMemo, useState } from 'react';

const ExpensiveComponent = ({ number }) => {
  const calculateSquare = (num) => {
    alert('Calculating square...');
    return num * num;
  };

  // Memoize the result of the calculation
  const square = useMemo(() => calculateSquare(number), [number]);

  return (
    <div>
      Square of {number} is {square}
    </div>
  );
};

const App = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveComponent number={number} />
      <button onClick={() => setNumber(number + 1)}>
        Increment Number: {number}
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
    </div>
  );
};

export default App;
