import { useEffect, useLayoutEffect, useState } from "react";

export default function RenderAfter() {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(2);

  useEffect(() => {
    if (value2 === 0) {
      setValue2(Math.random() * 100);
    }
  }, [value2]);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(Math.random() * 100);
    }
  }, [value]);

  return (
    <>
      <button onClick={() => setValue(0)}>Current value1: {value}</button>
      <button onClick={() => setValue2(0)}>Current value2: {value2}</button>
    </>
  );
};