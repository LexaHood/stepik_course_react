import { useContext } from "react";
import { CustomContext } from "./Context";

import Book from "./Book";

export default function Books(props) {
  const { books } = useContext(CustomContext);
  console.log('A', books);
  return (
    <>{ books.map((elem) => (<Book key={elem.id} {...elem} />)) }</>
  );
};