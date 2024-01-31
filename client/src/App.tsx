import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

const OpenPro = lazy(() => import('./Pages/Project/OpenPro'));
const Profile = lazy(() => import('./Pages/Profile'));
const Upload = lazy(() => import('./Pages/Upload/Upload'));
const Search = lazy(() => import('./Pages/Search'));
const LandingPage = lazy(() => import('./Pages/Landingpage/LandingPage'));
const Login = lazy(() => import('./Pages/Login'));
const Account = lazy(() => import('./Pages/Account'));
const Register = lazy(() => import('./Pages/Register'));
const Home = lazy(() => import('./Pages/Home'));

function App() {

  const { user } = useSelector(state => state.user)

  console.log(user)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/home" />}
        />
        <Route
          path="/"
          element={!user ? <LandingPage /> : <Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={"loading..."}>
              {user ? <Home /> : <Navigate to="/" />}
            </Suspense>
          }
        />
        <Route
          path="/openpro/:id"
          element={
            <Suspense fallback={"loading..."}>
              {user ? <OpenPro /> : <Navigate to="/" />}
            </Suspense>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <Suspense fallback={"loading..."}>
              {user ? <Profile /> : <Navigate to="/" />}
            </Suspense>
          }
        />
        <Route
          path="/upload/:id"
          element={
            <Suspense fallback={"loading..."}>
              {user ? <Upload /> : <Navigate to="/" />}
            </Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={"loading..."}>
              {user ? <Search /> : <Navigate to="/" />}
            </Suspense>
          }
        />
        <Route
          path="/account/:id"
          element={
            <Suspense fallback={"loading..."}>
              {user ? <Account /> : <Navigate to="/" />}
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
