import React, { useState } from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
