import { memo, useCallback, useMemo, useState } from "react";

const BTN = memo(function BTN({ onClick, value }) {
  console.log(`Render BTN comp: ${value}`);

  Test();

  return (
    <button style={{ display: "block" }} onClick={onClick}>{value}</button>
  );
})

function Test(a = 1, b = 1) {
  console.log('Slow func started');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }
  return a * b;
}

export default function MemoizationComp() {
  let startTime = performance.now();
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const res = useMemo(() => Test(val1, val2), [val1]);

  const increment1 = useCallback(() => {
    setVal1((n) => n + 1)
  }, []);
  const increment2 = useCallback(() => setVal2((n) => n + 1), [])

  console.log(`Render MemoizationComp for ${performance.now() - startTime}ms`);
  return (
    <>
      <BTN onClick={increment1} value={val1} />
      <BTN onClick={increment2} value={val2} />
      <p>{res}</p>
    </>
  );
};