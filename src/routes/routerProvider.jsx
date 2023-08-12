import {
  Outlet,
  RouterProvider as Provider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import AccessControl from "./accessControl";
import routes from "./routes";
import ErrorBoundary from "../errorBoundary/errorBoundary";
// import ErrorBoundary from "~/common/errorBoundary/errorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    routes.map((route) => (
      <Route id={route.id} key={route.path} element={<Outlet />}>
        <Route
          path={route.path}
          element={
            route.redirect ? (
              route.redirect
            ) : (
              <route.layout>
                <ErrorBoundary>
                  <route.component route={route} />
                </ErrorBoundary>
              </route.layout>
            )
          }
        />
      </Route>
    ))
  )
);

export default function RouterProvider() {
  return <Provider router={router} />;
}
