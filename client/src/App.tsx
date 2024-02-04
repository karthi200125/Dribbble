import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import Loading from './Components/Loading';

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

interface DecodeToken {
  exp: any;
}

function App() {
  const { user } = useSelector((state: any) => state.user);
  const token: any = localStorage.getItem("access_token");
  const isTokenValid = token && jwtDecode<DecodeToken>(token).exp > Date.now() / 1000;

  if (!isTokenValid) {
    localStorage.removeItem('search')
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
  }

  const google = user?.fromGoogle

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={!user && <Login />} />
          {/* <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} /> */}
          <Route path="/register" element={!user && <Register />} />
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