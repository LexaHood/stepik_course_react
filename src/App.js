import { useState } from 'react';
import './App.css';
import { Book } from './Book';
import { Preloader } from './Preloader';
import Comp from './CompExample';

function App(props) {
  const [count, handleCount] = useState(0)
  return props.isLoading ? <Preloader /> :(
    <div className="App">
      <Book name='Example 1' yaer='1111' price='999'>IM CHILDREN</Book>
      <Book name='Example 2' yaer='1212' price='1999' />
      <Book name='Example 3' yaer='1313' price='2999' />
      <button className='button-22' style={{margin: '0 0.5rem'}} onClick={() => handleCount(count + 1)}>+</button>
      <button className='button-22' style={{margin: '0 0.5rem'}} onClick={() => handleCount(0)}>Reset</button>
      <button className='button-22' style={{margin: '0 0.5rem'}} onClick={() => handleCount(count - 1)}>-</button>
      <p>Count: {count}</p>
      <Comp/>
    </div>
  );
}

export default App;
