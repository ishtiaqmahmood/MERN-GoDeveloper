import React from "react";
import Landing from "../components/layout/Landing";
import Navbar from "../components/layout/Navbar";
import { Provider } from "react-redux";
import store from "../store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Navbar />
        <Landing />
      </React.Fragment>
    </Provider>
  );
}
