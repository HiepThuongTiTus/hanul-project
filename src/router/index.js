import React,{Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Detail from "../components/Detail";
import App from "../App";
import Login from "../components/Login";
import Resgister from "../components/Resgister";
import Hanul from "../components/Hanul";
import { helpers } from "../helpers/common";
import { Skeleton } from "antd";

const routeApp = () => {
  function PrivateRouteLogin({ children, ...rest }) {
    const auth = helpers.getInfo();
    console.log(auth);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            <Redirect
              to={{
                pathname: "/hanul",
                state: { from: location },
              }}
            />
          ) : (
            children
          )
        }
      />
    );
  }

  function PrivateRouteHanul({ children, ...rest }) {
    const auth = helpers.getInfo();

    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
  return (
    <Router>
            <Suspense fallback={<Skeleton active />}>

      <Switch>
        <Route path="/" exact>
          {/* Đây là cái đường dẫn, */}
          <App />
          {/* đây là vị trí cần nó hiện nội dung đường dẫn tới trang đó */}
        </Route>
        <Route path="/#home">
          <App />
        </Route>
        <Route path="/#news">
          <Detail />
        </Route>
        <PrivateRouteLogin path="/login">
          <Route>
            <Login />
          </Route>
        </PrivateRouteLogin>
        <PrivateRouteHanul path="/hanul">
          <Route>
            <Hanul />
          </Route>
        </PrivateRouteHanul>

        <Route path="/register">
          <Resgister />
        </Route>
      </Switch>
      </Suspense>
    </Router>
  );
};
export default React.memo(routeApp);
