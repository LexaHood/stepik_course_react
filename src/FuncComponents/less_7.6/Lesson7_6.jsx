import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      exmapleFunc() {
        // do Something
      },
    };
  }, []);

  return <input {...props} ref={inputRef} />;
});

export default function Lesson7_6() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Focus Input
      </button>
    </form>
  );
}