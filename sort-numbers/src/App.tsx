import Header from './components/Header';
import LuckyNumbers from './components/LuckyNumbers';

function App() {
  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }

  return (
    <>
      <Header />
      <LuckyNumbers />
      <ul>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
      </ul>
    </>
  );
}

export default App;
