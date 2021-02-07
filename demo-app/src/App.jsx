import React from "react";
import { lazy, Suspense } from "react";
import { Redirect, BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { Container, Row, Col } from "react-bootstrap";
//import "./App.css";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Login} />
          <RouteWrapper
            exact
            path="/Dashboard"
            component={Dashboard}
            layout={Layout}
          />
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
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Route
            {...rest}
            render={(props) =>
              isLogin() ? (
                <React.Fragment>{<Component {...props} />}</React.Fragment>
              ) : (
                <Redirect to="/" component={Login}></Redirect>
              )
            }
          />
        </Col>
      </Row>
    </Container>
  );
}
