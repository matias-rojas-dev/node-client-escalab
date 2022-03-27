import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { LoadingOutlined } from '@ant-design/icons';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// lazy loading - https://es.reactjs.org/docs/code-splitting.html
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./components/nav/Header'));
const RegisterComplete = lazy(() => import('./pages/auth/RegisterComplete'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className='col text-danger p-5'>
          <LoadingOutlined />
        </div>
      }
    >

      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/register/complete" component={RegisterComplete} />
        <Route component={NotFound} />

      </Switch>
    </Suspense>
  );
}

// High order components
export default App;
