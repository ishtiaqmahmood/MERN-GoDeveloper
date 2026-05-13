import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Alert from "../components/layout/Alert";
import { useEffect } from "react";
import { loadUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Alert />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
