import React from "react";
import { lazy, Suspense } from "react";
import { Redirect, Switch, Route, withRouter } from "react-router";
import { CommonLayout } from "./components/CommonLayout";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Login = lazy(() => import("./components/Login"));

class App extends React.Component {
  constructor(props) {
    super(props);
    // Store the previous pathname and search strings
    this.currentPathname = null;
    this.currentSearch = null;
  }

  componentDidMount() {
    const { history } = this.props;

    history.listen((newLocation, action) => {
      if (action === "PUSH") {
        if (
          newLocation.pathname !== this.currentPathname ||
          newLocation.search !== this.currentSearch
        ) {
          // Save new location
          this.currentPathname = newLocation.pathname;
          this.currentSearch = newLocation.search;

          // Clone location object and push it to history
          history.push({
            pathname: newLocation.pathname,
            search: newLocation.search,
          });
        }
      } else {
        // Send user back if they try to navigate back
        history.go(1);
      }
    });
  }
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Login} />
          <RouteWrapper exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);

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
          <Redirect to="/" component={Login}></Redirect>
        )
      }
    />
  );
}
