/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */
import Post from "./Post";

export default (props) => {
  const {posts, cb} = props;
  return <div>
      {posts.map((post) => {
        return !post.hide && <Post key={post.id} name={post.name} id={post.id} cb={cb}/>
      })}
    </div>
};