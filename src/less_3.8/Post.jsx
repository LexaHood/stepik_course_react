/* eslint-disable import/no-anonymous-default-export */

export default (props) => {
  const {name, cb} = props
  return <h3 onClick={() => cb(name)}>{name}!!</h3>
};