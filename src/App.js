import './App.css';
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.js'
import SignUpPage from './pages/SignUpPage.js'
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import IsLogged from './components/IsLogged.js';
import Collections from './pages/Collections';
import ExploreItems from './pages/ExploreItems';
import ItemDetail from './pages/ItemDetail';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/profile' element={
          <IsLogged>
            <ProfilePage />
          </IsLogged>
        } />
        <Route path='/collections' element={<Collections />} />
        <Route path='/exploreItems' element={<ExploreItems />} />
        <Route path='/itemDetail' element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;
