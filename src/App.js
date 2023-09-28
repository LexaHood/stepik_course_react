import logo from './logo.svg';
import './App.css';

function App() {
  const Book = (props) => {
    return <>
      <h2>{props.name}</h2>
      <p>{props.yaer}</p>
      <p>{props.price}</p>
    </>
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Саламат, ты не один такой
        </p>
      </header>
      <Book name='Example 1' yaer='1111' price='999' />
      <Book name='Example 2' yaer='1212' price='1999' />
      <Book name='Example 3' yaer='1313' price='2999' />
    </div>
  );
}

export default App;
