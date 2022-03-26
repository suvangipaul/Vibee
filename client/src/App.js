import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Profile } from './pages';
import { Header } from './components';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './components/Loader/Loading';


function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        {!isAuthenticated && (<Route path="/" element={<Home />} />)}
        {isAuthenticated && (<Route path="/" element={<Dashboard />} />)}
        {isAuthenticated && (<Route path="/profile" element={<Profile />} />)}
      </Routes>
    </div>
  );
}

export default App;
