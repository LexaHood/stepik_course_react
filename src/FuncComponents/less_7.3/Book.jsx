import { useContext } from "react";
import { CustomContext } from "./Context";

export default function Book(props) {
  const removeBook = useContext(CustomContext);
  return (
    <h2 onClick={() => removeBook.removeBook(props.id)}>{props.title}</h2>
  );
};