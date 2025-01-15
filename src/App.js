import './App.css';
import TicTacToe from './TicTacToe';
// import TicTacToe from './Components/TicTacToe/TicTacToe';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// function App() {
//   return (
//     <div>
//       <TicTacToe/>
//     </div>
//   );
// }
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
