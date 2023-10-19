import { LottoNumbers } from './components/LottoNumers'

function App() {
  const numbers = [5, 6, 8, 4, 1, 6]
  return (
    < LottoNumbers
      numbers={numbers}
    />
  );
}

export default App
