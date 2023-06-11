import React, { useState } from 'react';

const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '' || (inputValue >= 10 && inputValue <= 1000)) {
      setValue(inputValue);
    }
  };

  return [value, handleChange];
};

function Inputs() {
  const [rowsInput, rowsInputChange] = useInputState('');
  const [colsInput, colsInputChange] = useInputState('');
  const [minesInput, minesInputChange] = useInputState('');

  return (
    <div>
      <h1>Please set up your desired game settings</h1>
      <input type="number" value={rowsInput} onChange={rowsInputChange} />
      <p>Type desired amount of rows</p>
      <input type="number" value={colsInput} onChange={colsInputChange} />
      <p>Type desired amount of columns</p>
      <input type="number" value={minesInput} onChange={minesInputChange} />
      <p>Type desired amount of mines</p>
    </div>
  );
}

export default Inputs;
