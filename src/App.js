import './App.css';
import { Book } from './Book';
import { Preloader } from './Preloader';

function App(props) {
  return props.isLoading ? <Preloader /> :(
    <div className="App">
      <Book name='Example 1' yaer='1111' price='999'>IM CHILDREN</Book>
      <Book name='Example 2' yaer='1212' price='1999' />
      <Book name='Example 3' yaer='1313' price='2999' />
    </div>
  );
}

export default App;
