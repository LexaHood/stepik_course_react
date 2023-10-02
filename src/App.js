import { useState } from 'react';
import './App.css';
import { Book } from './less_2.5/Book';
import { Preloader } from './Preloader';
import Comp from './less_3.5/CompExample';
import Timer from './less_3.6/Timer';
import Posts from './less_3.8/Posts';
import Form from './less_4.1/Form';

function App(props) {
  // less 3.3
  // const [count, handleCount] = useState(0);

  // less 3.8, 3.9
  const [posts, handlePosts] = useState([
    {id: 'asd1', name: 'Hello Posts 1', hide: false},
    {id: 'asd2', name: 'Hello Posts 2', hide: false},
    {id: 'asd3', name: 'Hello Posts 3', hide: false},
  ]);
  const removePost = (id) => {
    handlePosts(posts.map(post => (post.id === id ? {...post, hide: true} : post)));
  };

  return props.isLoading ? <Preloader /> : (
    <div className="App">
      {/* less 2.4 */}
      {/* <Book name='Example 1' yaer='1111' price='999'>IM CHILDREN</Book>
      <Book name='Example 2' yaer='1212' price='1999' />
      <Book name='Example 3' yaer='1313' price='2999' /> */}

      {/* less 3.3 */}
      {/* <button className='button-22' style={{margin: '0 0.5rem'}} onClick={() => handleCount(count + 1)}>+</button>
      <button className='button-22' style={{margin: '0 0.5rem'}} onClick={() => handleCount(0)}>Reset</button>
      <button className='button-22' style={{margin: '0 0.5rem'}} onClick={() => handleCount(count - 1)}>-</button>
      <p>Count: {count}</p> */}

      {/* less 3.5 */}
      {/* <Comp/> */}

      {/* less 3.6 */}
      {/* <Timer /> */}

      {/* less 3.8, 3.9 */}
      {/* <Posts posts={posts} cb={removePost} /> */}

      {/* less 4.1 */}
      <Form/>
    </div>
  );
}

export default App;
