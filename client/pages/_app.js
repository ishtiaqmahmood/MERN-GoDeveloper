import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Alert from "../components/layout/Alert";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Alert />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
