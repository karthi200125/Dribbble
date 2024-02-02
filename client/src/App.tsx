import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

const OpenPro = lazy(() => import('./Pages/Project/OpenPro'));
const Profile = lazy(() => import('./Pages/Profile/Profile'));
const Upload = lazy(() => import('./Pages/Upload/Upload'));
const Search = lazy(() => import('./Pages/Search'));
const LandingPage = lazy(() => import('./Pages/Landingpage/LandingPage'));
const Login = lazy(() => import('./Pages/Login'));
const Account = lazy(() => import('./Pages/Account'));
const Register = lazy(() => import('./Pages/Register'));
const Home = lazy(() => import('./Pages/Home'));
const Welcome = lazy(() => import('./Pages/Welcome'));

function App() {

  const { user } = useSelector((state: any) => state.user)

  return (
    <BrowserRouter>
      <Suspense fallback={"laoding....."}>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/home" />} />
          <Route path="/" element={!user ? <LandingPage /> : <Navigate to="/home" />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route path="/openpro/:id" element={user ? <OpenPro /> : <Navigate to="/" />} />
          <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to="/" />} />
          <Route path="/upload/:id" element={user ? <Upload /> : <Navigate to="/" />} />
          <Route path="/search" element={user ? <Search /> : <Navigate to="/" />} />
          <Route path="/account/:id" element={user ? <Account /> : <Navigate to="/" />} />
          <Route path="/welcome" element={user ? <Welcome /> : <Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
