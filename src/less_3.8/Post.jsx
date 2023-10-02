/* eslint-disable import/no-anonymous-default-export */

export default (props) => {
  const {name, id, cb} = props
  return <>
    <h3>{name}!!</h3>
    <button className="button-22" onClick={() => cb(id)}>Delete</button>
  </>
};