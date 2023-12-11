import React, { useState } from "react";

const Counter = () => {
  // var value = 0
  const [value, setValue] = useState(0);
  const onAdd = () => {
    // value += 1;
    setValue(value + 1);
  };
  const onSub = () => {
    setValue(value - 1);
    // value -= 1;
  };
  return (
    <div>
      <button onClick={onAdd}>Add</button>
      <h2>{value}</h2>
      <button onClick={onSub}>Sub</button>
    </div>
  );
};

export default Counter;
