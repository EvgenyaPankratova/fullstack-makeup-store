import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
