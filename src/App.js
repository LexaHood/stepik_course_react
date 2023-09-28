import logo from './logo.svg';
import './App.css';
import { Book } from './Book';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Саламат, ты не один такой
        </p>
      </header>
      <Book name='Example 1' yaer='1111' price='999'>IM CHILDREN</Book>
      <Book name='Example 2' yaer='1212' price='1999' />
      <Book name='Example 3' yaer='1313' price='2999' />
    </div>
  );
}

export default App;
