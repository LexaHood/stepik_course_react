export const Book = (props) => {
  return <>
    <h2>{props.name}</h2>
    <p>{props.yaer}</p>
    <p>{props.price}</p>
    {props.children ? <span>{props.children}</span> : ''}
  </>
};