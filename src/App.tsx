import './App.css';
import { BrowserRouter, Outlet } from 'react-router-dom';
import NavigationRoutes from './components/main-components/NavigationRoutes';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
