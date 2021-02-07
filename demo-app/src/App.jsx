import React from "react";
import { lazy, Suspense } from "react";
import { Redirect, BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { CommonLayout } from "./components/CommonLayout";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Login} />
          <RouteWrapper exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

function RouteWrapper({ component: Component, ...rest }) {
  const isLogin = () => {
    return localStorage.getItem("islogin") ? true : false;
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <CommonLayout>{<Component {...props} />}</CommonLayout>
        ) : (
          // <React.Fragment>{<Component {...props} />}</React.Fragment>
          <Redirect to="/" component={Login}></Redirect>
        )
      }
    />
  );
}
